# bash statt /bin/sh: unter Ubuntu ist sh = dash, dort bricht „set -o pipefail“ (prod-backup) das Rezept ab
SHELL := /bin/bash

export UID := $(shell id -u)
export GID := $(shell id -g)

DC   = docker compose
PHP  = $(DC) exec -T php
COMPOSER = $(DC) exec -T php composer

.DEFAULT_GOAL := help
.PHONY: help up down restart sh console logs install assets assets-watch db db-status migration db-dump db-restore test qa lint prod-up prod-deploy prod-down prod-logs prod-console prod-status prod-backup prod-import prod-restore-test

help: ## Diese Hilfe
	@grep -E '^[a-zA-Z_-]+:.*?## ' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-16s %s\n", $$1, $$2}'

up: ## Umgebung starten (php, caddy) – http://127.0.0.1:7999
	$(DC) up -d --build --wait

down: ## Alles stoppen (Daten bleiben im Volume)
	$(DC) down

restart: down up ## Neu starten

sh: ## Shell im php-Container
	$(DC) exec php sh

console: ## Symfony-Konsole, z. B. make console CMD="debug:router"
	$(DC) exec php php bin/console $(CMD)

logs: ## Logs aller Dienste verfolgen
	$(DC) logs -f --tail=100

install: ## Composer-Abhängigkeiten installieren und Assets bauen
	$(COMPOSER) install
	$(MAKE) assets

assets: ## Frontend-Assets bauen (Webpack Encore)
	npm install
	npm run build

assets-watch: ## Assets bei Änderungen neu bauen (läuft im Vordergrund)
	npm run watch

db: ## Datenbank-Migrationen ausführen
	$(PHP) php bin/console doctrine:migrations:migrate --no-interaction --allow-no-migration

db-status: ## Stand der Migrationen
	$(PHP) php bin/console doctrine:migrations:status

migration: ## Neue Migration aus Entity-Änderungen erzeugen (danach prüfen und anpassen!)
	$(PHP) php bin/console doctrine:migrations:diff --no-interaction

db-dump: ## SQLite-Datenbank nach backups/local/<datum>.db sichern
	@mkdir -p backups/local
	@cp var/data.db backups/local/$$(date +%F_%H%M).db
	@ls -t backups/local/ | head -1

db-restore: ## Letzte lokale Sicherung zurückspielen (Standard: neueste in backups/local/, sonst DUMP=…) – ERSETZT die lokale Datenbank
	@file=$(or $(DUMP),$(shell ls -t backups/local/*.db 2>/dev/null | head -1)); \
	test -n "$$file" && test -f "$$file" || ( echo "Keine Sicherung gefunden (DUMP=$$file)." && exit 1 ); \
	echo "Spiele $$file ein …"; \
	cp var/data.db var/data.db.bak; \
	cp "$$file" var/data.db

test: ## PHPUnit ausführen
	$(PHP) vendor/bin/phpunit

qa: lint test ## Alle Prüfungen

lint: ## Container, Twig und YAML prüfen
	$(PHP) php bin/console lint:container
	$(PHP) php bin/console lint:twig templates
	$(PHP) php bin/console lint:yaml config

# ---------- Produktion ----------
PROD_ENV         ?= .env.prod.local
PROD_PROJECT     ?= advent
PROD_DC           = docker compose -p $(PROD_PROJECT) -f compose.prod.yaml --env-file $(PROD_ENV)
PROD_PHP          = $(PROD_DC) exec -T php
PROD_BACKUP_DIR  ?= backups/prod
PROD_BACKUP_DAYS ?= 14

prod-up: ## Produktion: Images bauen, sichern, Datenbank migrieren, alles starten (auch für Updates; ohne Sicherung: NO_BACKUP=ja)
	$(PROD_DC) build
	$(PROD_DC) up -d --wait php
	@# erst sichern, dann migrieren – schlägt die Sicherung fehl, bricht make hier ab
	@if [ "$(NO_BACKUP)" = "ja" ]; then echo "Ohne Sicherung (NO_BACKUP=ja)."; else $(MAKE) --no-print-directory prod-backup PROD_ENV=$(PROD_ENV) PROD_PROJECT=$(PROD_PROJECT) PROD_BACKUP_DIR=$(PROD_BACKUP_DIR); fi
	$(PROD_PHP) php bin/console doctrine:migrations:migrate --no-interaction --allow-no-migration
	$(PROD_DC) up -d --wait

prod-deploy: ## Produktion: neuesten Code holen und ausrollen (git pull + prod-up)
	git pull
	$(MAKE) --no-print-directory prod-up PROD_ENV=$(PROD_ENV) PROD_PROJECT=$(PROD_PROJECT) PROD_BACKUP_DIR=$(PROD_BACKUP_DIR) NO_BACKUP=$(NO_BACKUP)

prod-down: ## Produktion: stoppen (Daten bleiben im Volume)
	$(PROD_DC) down

prod-logs: ## Produktion: Logs verfolgen
	$(PROD_DC) logs -f --tail=100

prod-console: ## Produktion: Symfony-Konsole, z. B. make prod-console CMD="debug:router"
	$(PROD_DC) exec php php bin/console $(CMD)

prod-status: ## Produktion: Zustand auf einen Blick (Container, Datenbank, letzte Sicherung)
	@$(PROD_DC) ps --format 'table {{.Service}}\t{{.Status}}'
	@echo "Datenbank:"
	@$(PROD_DC) exec -T php test -f var/data.db 2>/dev/null && ($(PROD_PHP) php bin/console dbal:run-sql "SELECT 1" >/dev/null 2>&1 && echo "  OK" || echo "  FEHLER") || echo "  noch keine Datenbank vorhanden"
	@echo "Letzte Sicherung:"
	@ls -t $(PROD_BACKUP_DIR)/*.db.gz 2>/dev/null | head -1 | sed 's/^/  /' || echo "  keine"

prod-backup: ## Produktion: SQLite-Datenbank nach backups/prod/ sichern, ältere als 14 Tage löschen (noch keine Datenbank? wird übersprungen)
	@mkdir -p $(PROD_BACKUP_DIR)
	@if ! $(PROD_DC) exec -T php test -f var/data.db; then \
		echo "Noch keine Datenbank (var/data.db) vorhanden – Sicherung übersprungen."; \
		exit 0; \
	fi; \
	file=$(PROD_BACKUP_DIR)/advent-$$(date +%F-%H%M).db.gz; \
	set -o pipefail; \
	$(PROD_DC) exec -T php cat var/data.db | gzip > "$$file.part" \
	  && mv "$$file.part" "$$file" && echo "Sicherung: $$file" \
	  || ( rm -f "$$file.part"; echo "Sicherung FEHLGESCHLAGEN"; exit 1 )
	@find $(PROD_BACKUP_DIR) -name 'advent-*.db.gz' -mtime +$(PROD_BACKUP_DAYS) -delete

prod-import: ## Produktion, einmalig beim Umzug: lokale Sicherung einspielen – ERSETZT die Datenbank (DUMP=… CONFIRM=ja)
	@test "$(CONFIRM)" = "ja" || ( echo "Löscht die Produktionsdatenbank! Aufruf: make prod-import DUMP=backups/local/xyz.db CONFIRM=ja" && exit 1 )
	@test -f "$(DUMP)" || ( echo "Kein Dump gefunden (DUMP=$(DUMP))." && exit 1 )
	@# was bisher drin war, vorher sichern (auch eine leere Datenbank – kostet nichts)
	@$(MAKE) --no-print-directory prod-backup PROD_ENV=$(PROD_ENV) PROD_PROJECT=$(PROD_PROJECT) PROD_BACKUP_DIR=$(PROD_BACKUP_DIR)
	@case "$(DUMP)" in *.gz) gunzip -c "$(DUMP)";; *) cat "$(DUMP)";; esac | $(PROD_DC) exec -T php sh -c 'cat > var/data.db'
	$(PROD_PHP) php bin/console doctrine:migrations:sync-metadata-storage --no-interaction
	$(PROD_PHP) php bin/console doctrine:migrations:migrate --no-interaction --allow-no-migration
	@$(MAKE) --no-print-directory prod-status PROD_ENV=$(PROD_ENV) PROD_PROJECT=$(PROD_PROJECT) PROD_BACKUP_DIR=$(PROD_BACKUP_DIR)

prod-restore-test: ## Produktion: neueste Sicherung lokal entpacken und prüfen, ob sie lesbar ist
	@latest=$$(ls -t $(PROD_BACKUP_DIR)/*.db.gz 2>/dev/null | head -1); test -n "$$latest" || ( echo "Keine Sicherung in $(PROD_BACKUP_DIR)." && exit 1 ); \
	echo "Prüfe $$latest …"; \
	tmp=$$(mktemp); \
	gunzip -c "$$latest" > "$$tmp"; \
	sqlite3 "$$tmp" "PRAGMA integrity_check;" && echo "Wiederherstellung funktioniert."; \
	rm -f "$$tmp"
