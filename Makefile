# bash statt /bin/sh: unter Ubuntu ist sh = dash, dort bricht „set -o pipefail“ (prod-backup) das Rezept ab
SHELL := /bin/bash

export UID := $(shell id -u)
export GID := $(shell id -g)

DC   = docker compose
PHP  = $(DC) exec -T php
COMPOSER = $(DC) exec -T php composer

.DEFAULT_GOAL := help
.PHONY: help up down restart sh console logs install assets assets-watch db db-status migration db-dump db-restore test qa lint prod-secrets prod-show-secrets prod-up prod-down prod-logs prod-console prod-status prod-backup

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

db-dump: ## Lokale MySQL-Datenbank nach backups/local/<datum>.sql.gz sichern
	@mkdir -p backups/local
	@set -o pipefail; file=backups/local/$$(date +%F_%H%M).sql.gz; \
	$(DC) exec -T database sh -c 'MYSQL_PWD="$$MYSQL_ROOT_PASSWORD" mysqldump -u root --single-transaction --databases "$$MYSQL_DATABASE"' | gzip > "$$file" \
	  && echo "$$file" || ( rm -f "$$file"; echo "Sicherung FEHLGESCHLAGEN"; exit 1 )

db-restore: ## Letzte lokale Sicherung zurückspielen (Standard: neueste in backups/local/, sonst DUMP=…) – ERSETZT die lokale Datenbank
	@file=$(or $(DUMP),$(shell ls -t backups/local/*.sql.gz 2>/dev/null | head -1)); \
	test -n "$$file" && test -f "$$file" || ( echo "Keine Sicherung gefunden (DUMP=$$file)." && exit 1 ); \
	echo "Spiele $$file ein …"; \
	gunzip -c "$$file" | $(DC) exec -T database sh -c 'MYSQL_PWD="$$MYSQL_ROOT_PASSWORD" mysql -u root'

test: ## PHPUnit ausführen
	$(PHP) vendor/bin/phpunit

qa: lint test ## Alle Prüfungen

lint: ## Container, Twig und YAML prüfen
	$(PHP) php bin/console lint:container
	$(PHP) php bin/console lint:twig templates
	$(PHP) php bin/console lint:yaml config

# ---------- Produktion ----------
# Standardweg ist Komodo (deploy/komodo/advent.toml, docs/deployment.md). Diese Ziele sind der manuelle Notweg
# und erzeugen beim ersten Einrichten die Secrets.
PROD_ENV         ?= .env.prod.local
PROD_PROJECT     ?= advent
PROD_DC           = docker compose -p $(PROD_PROJECT) -f compose.prod.yaml --env-file $(PROD_ENV)
PROD_PHP          = $(PROD_DC) exec -T app php

prod-secrets: ## Produktion: .env.prod.local aus .env.prod.dist mit Zufallswerten anlegen (überschreibt nichts)
	@test ! -e $(PROD_ENV) || ( echo "$(PROD_ENV) gibt es schon – nichts verändert." && exit 1 )
	@umask 077 && sed -e "s/^APP_SECRET=.*/APP_SECRET=$$(openssl rand -hex 32)/" \
	    -e "s/^MYSQL_PASSWORD=.*/MYSQL_PASSWORD=$$(openssl rand -hex 24)/" \
	    -e "s/^MYSQL_ROOT_PASSWORD=.*/MYSQL_ROOT_PASSWORD=$$(openssl rand -hex 24)/" \
	    .env.prod.dist > $(PROD_ENV)
	@chmod 600 $(PROD_ENV)
	@echo "$(PROD_ENV) erzeugt (Rechte 600). Die drei Secrets jetzt in Komodo anlegen (ADVENT_APP_SECRET,"
	@echo "ADVENT_MYSQL_PASSWORD, ADVENT_MYSQL_ROOT_PASSWORD) und im Passwortmanager ablegen: make prod-show-secrets"

prod-show-secrets: ## Produktion: Secrets aus .env.prod.local mit den Namen der Komodo-Variablen anzeigen
	@test -r $(PROD_ENV) || ( echo "$(PROD_ENV) fehlt oder ist nicht lesbar (erst make prod-secrets)." && exit 1 )
	@grep -E '^(APP_SECRET|MYSQL_PASSWORD|MYSQL_ROOT_PASSWORD|SENTRY_DSN)=.' $(PROD_ENV) | sed 's/^/ADVENT_/' | sed 's/=/  →  /'

# Dasselbe wie ein Deploy in Komodo (deploy/komodo/advent.toml): sichern, bauen, migrieren (Dienst migrate), starten.
prod-up: ## Produktion: Datenbank sichern, Images bauen, migrieren, alles starten (manueller Weg neben Komodo)
	COMPOSE_PROJECT=$(PROD_PROJECT) ENV_FILE=$(PROD_ENV) sh deploy/komodo/pre-deploy.sh
	$(PROD_DC) up -d --build --wait --wait-timeout 300

prod-down: ## Produktion: stoppen (Daten bleiben im Volume)
	$(PROD_DC) down

prod-logs: ## Produktion: Logs verfolgen
	$(PROD_DC) logs -f --tail=100

prod-console: ## Produktion: Symfony-Konsole, z. B. make prod-console CMD="debug:router"
	$(PROD_DC) exec app php bin/console $(CMD)

prod-status: ## Produktion: Zustand auf einen Blick (Container, /healthz, letzte Sicherung)
	@$(PROD_DC) ps --format 'table {{.Service}}\t{{.Status}}'
	@echo; echo "Webserver (das, was der Reverse-Proxy auf dem VPS erreicht):"
	@$(PROD_DC) exec -T web wget -q -O- http://127.0.0.1/healthz 2>/dev/null | sed 's/^/  /' || echo "  FEHLER"
	@echo; echo "Letzte Sicherung:"
	@dir=$$(sed -n 's/^BACKUP_DIR=//p' $(PROD_ENV)); ls -t "$${dir:-/srv/advent/backups}"/advent-db-*.sql.gz 2>/dev/null | head -1 | sed 's/^/  /' || echo "  keine (oder kein Lesezugriff – sudo)"

prod-backup: ## Produktion: Datenbank-Dump nach BACKUP_DIR (Anlass „manuell“, Rotation wie Komodo)
	$(PROD_DC) run --rm --no-TTY --no-deps backup manuell
