# Advent auf abyss betreiben (Komodo)

Advent (Kresh-Journey und Adventskalender) läuft als Docker-Stack auf abyss und ist unter `https://kresh.wh-company.com` erreichbar. Deployt wird über **Komodo** (v2.3, Core und Periphery auf abyss), Quelle ist `rextuus/advent`, Branch `main`.

```
Besucher ──HTTPS──▶ VPS (Caddy, Zertifikat) ──WireGuard──▶ abyss 10.0.0.2:7999 (Advent-Caddy, HTTP) ──▶ PHP-FPM ──▶ MySQL
```

Lokal geprüft am 09.11. und 11.11.2026, als Projekt `adventprobe` mit `VOLUME_PREFIX=adventprobe` im echten Periphery-Image (`ghcr.io/moghtech/komodo-periphery:2`), in der Reihenfolge, die Komodo ausführt (Pre Deploy → `config` → `build` → `up -d --wait` → Post Deploy):
- **Umzug:** Ein nachgebauter alter Stack (Dienst `caddy` auf demselben Port) blockiert den Deploy, wie erwartet. Nach dem Stoppen klappt der Erst-Deploy auf leeren Volumes:
  - Pre Deploy überspringt die Sicherung.
  - `migrate` legt das Schema an und spielt die SQLite-Daten ein.
  - Die Inhalte sind identisch mit `var/data.db` (Prüfsumme je Tabelle).
  - Danach Admin anlegen, Login über `/admin` testen.
- **Zweiter Deploy:** Sicherung `pre-deploy` wird angelegt, keine neue Migration.
- **Import-Migration bei vorhandenen Daten:** Sie fügt nichts ein und wird trotzdem als ausgeführt vermerkt.
- **Sicherungen:** `daily` (wie die Procedure, mit `--no-deps`) hat Rechte 600 und den Ordner 700. Bei gestopptem Stack scheitert sie absichtlich, ohne eine halbe Datei zu hinterlassen. Wiederherstellung aus dem Dump funktioniert.
- **Schon am 09.11. geprüft:** unaufgelöstes Secret, falscher Projektname/`VOLUME_PREFIX`, Proxy-Kette, `make prod-*`.

---

## Was auf dem Server läuft

| Dienst | Aufgabe | Von außen erreichbar? |
|---|---|---|
| `web` (Caddy 2.11) | Webserver (nur HTTP), liefert `public/` aus, reicht PHP an `app` weiter | ja, **nur** `HTTP_BIND:HTTP_PORT` = `10.0.0.2:7999`, für den VPS |
| `app` (PHP 8.5 FPM, Symfony 8) | die Anwendung | nein |
| `database` (MySQL 8.4.11) | Datenbank | nein |
| `migrate` | läuft bei jedem Deploy einmal: `doctrine:migrations:migrate`, dann beendet | nein |
| `backup` | Datenbank-Dump nach `/srv/advent/backups`, nur auf Abruf (vor jedem Deploy, täglich 01:30 über die Procedure `advent-backup`) | nein |

- **Startreihenfolge:** `database` (gesund) → `migrate` (erfolgreich beendet) → `app` (gesund) → `web`. `web` prüft per `/healthz` den ganzen Weg bis zur Datenbank.
- **Hintergrunddienste** (Worker, Cron, Scheduler) gibt es keine.
- **Mails** verschickt Advent nicht. Es ist kein Mailer installiert, deshalb gibt es kein `MAILER_DSN`.
- **Persistente Daten:** nur die Datenbank, im Volume **`advent_prod_mysql_data`**. Uploads gibt es keine, alle Bilder sind externe URLs. Für die Offsite-Sicherung reichen deshalb die Dumps.
- **Sitzungen** liegen im Container. Nach einem Deploy ist man in `/admin` abgemeldet, das ist bewusst einfach gehalten.
- **Volume-Name:** per `name:` festgenagelt, hängt also nicht am Projektnamen. Keine Überschneidung mit dem Dev-Volume (`advent_mysql_data`) oder dem Volume des alten manuellen Stacks (`advent_app_data`).

Wichtige Dateien:

| Datei | Zweck |
|---|---|
| `compose.prod.yaml` | der Produktions-Stack |
| `docker/prod/` | Dockerfile (Ziele `prod` und `web`), Caddyfile, php.ini, FPM-Konfiguration |
| `deploy/komodo/advent.toml` | Komodo-Ressourcen: Stack `advent` und Procedure `advent-backup` |
| `deploy/komodo/pre-deploy.sh` | prüft Variablen und Projektname, sichert die DB vor dem Deploy |
| `deploy/komodo/post-deploy.sh` | Zustand, `/healthz` und Migrationsergebnis ins Log, alte Advent-Images löschen |
| `deploy/komodo/db-backup.sh` | Dump mit Rotation (läuft im Dienst `backup`) |
| `deploy/umzug/export-sqlite.sh` | Umzug, Teil 1: alte SQLite-Datenbank → `migrations/data/legacy-2024.json` |
| `migrations/Version20261111120000.php` | Umzug, Teil 2: spielt die JSON-Datei beim ersten Deploy in die leere MySQL-DB ein |
| `.env.prod.dist` | alle Variablen, Secrets markiert, mit Namen der Komodo-Variablen |

---

## Variablen und Secrets

Komodo schreibt das Environment des Stacks bei jedem Deploy nach `/etc/komodo/stacks/advent/.env.prod.local` (Rechte 600). Nicht geheime Werte stehen direkt in `deploy/komodo/advent.toml`. Secrets werden dort als Komodo-Variable referenziert.

| Komodo-Variable (Secret) | Variable im Stack | Woher der Wert kommt |
|---|---|---|
| `ADVENT_APP_SECRET` | `APP_SECRET` | **neu**, `make prod-secrets` (64 Hex-Zeichen) |
| `ADVENT_MYSQL_PASSWORD` | `MYSQL_PASSWORD` | **neu**, `make prod-secrets` |
| `ADVENT_MYSQL_ROOT_PASSWORD` | `MYSQL_ROOT_PASSWORD` | **neu**, `make prod-secrets` |
| `ADVENT_SENTRY_DSN` (optional) | `SENTRY_DSN` | Sentry-Projekt → Client Keys. **Ohne Sentry** die Zeile `SENTRY_DSN = …` im Stack-Environment löschen, statt eine leere Variable anzulegen. |

Aus der alten `/opt/advent/.env` wird nichts übernommen. Ein neues `APP_SECRET` meldet lediglich alle ab, und eine MySQL-Datenbank hatte der alte Stack nicht.

Fest in `advent.toml`: `DEFAULT_URI=https://kresh.wh-company.com`, `HTTP_BIND=10.0.0.2`, `HTTP_PORT=7999`, `REVERSE_PROXY_IPS=10.0.0.1`, `MYSQL_DATABASE=app`, `MYSQL_USER=app`, `BACKUP_DIR=/srv/advent/backups`, `BACKUP_KEEP=14`.

> **Die DB-Passwörter gelten ab dem ersten Start fest.** MySQL legt sie beim allerersten Start im Volume an. Wer sie später in Komodo ändert, sperrt die App aus. Deshalb gehören sie gleich nach dem Erzeugen in den Passwortmanager.

---

## Umzug und erster Deploy (einmalig)

**Ausgangslage (laut `homelab/inventory.yaml`, Status `live-manual`):**
- Advent läuft auf abyss von Hand: `docker compose -p advent -f /opt/advent/compose.prod.yaml`.
- Die Dienste heißen `php` und `caddy`, der Port ist `10.0.0.2:7999`.
- Die Daten liegen in SQLite (`var/data.db`) im Volume **`advent_app_data`**. Ein Backup gibt es nicht.

**Ziel:** Komodo-Stack `advent` (gleicher Projektname), MySQL 8.4 im Volume `advent_prod_mysql_data`, tägliche Sicherung.

**Wie die Daten umziehen:**
- Der Inhalt der SQLite-Datenbank liegt als `migrations/data/legacy-2024.json` im Repo: Fragen, Antworten und Gewinnstufen, **ohne** Konten.
- Beim ersten Deploy legt der Dienst `migrate` das Schema an. Danach spielt `Version20261111120000` die Datei ein, noch bevor `app` startet.
- Eine Datenbank, in der schon Daten stehen, lässt die Migration in Ruhe.
- Der eingecheckte Stand stammt aus der lokalen `var/data.db` vom 05.02.2025 (sha256 `919d363dd25885089e294c88061118c341b244065d2e9817749f182afc9aa3a9`, steht auch in der JSON-Datei). Ob die Datei auf abyss genauso aussieht, wird in A.1 geprüft.
- Das Admin-Konto wird nach dem Deploy neu angelegt.

**Warum der alte Stack vorher weg muss:** Komodo ruft `docker compose … up -d` **ohne** `--remove-orphans` auf. Die alten Container `advent-php-1` und `advent-caddy-1` gehören zum selben Projekt, laufen aber als Waisen weiter. `advent-caddy-1` hält Port 7999, deshalb würde `web` nicht starten. Lokal genau so nachgestellt.

**Erwartete Ausfallzeit:** etwa 5–10 Minuten, von B.2 bis zum Ende von B.3. Beim ersten Deploy baut Komodo die Images (PHP-Extensions, Composer, npm), bevor es startet. Danach geht es in Sekunden.

### A. Vorbereitung (alter Stack läuft weiter)

1. **Aktuellen Datenstand von abyss holen und vergleichen.** Auf abyss:
   ```bash
   docker volume ls --filter name=advent                 # advent_app_data muss da sein
   sudo install -d -m 700 /srv/advent/umzug
   sudo docker run --rm -v advent_app_data:/data -v /srv/advent/umzug:/out alpine:3 \
     sh -c 'apk add -q sqlite && sqlite3 -readonly /data/data.db ".backup /out/data.db" && sha256sum /out/data.db'
   ```
   - **Gleicher Hash wie oben (`919d363d…`):** Der eingecheckte Stand ist aktuell, weiter mit A.2.
   - **Anderer Hash:** Die Datei auf den Arbeitsrechner holen und neu exportieren:
     ```bash
     ssh -t abyss 'sudo install -m 644 -o $USER /srv/advent/umzug/data.db /tmp/advent-data.db'
     scp abyss:/tmp/advent-data.db /tmp/ && ssh abyss 'rm /tmp/advent-data.db'
     sh deploy/umzug/export-sqlite.sh /tmp/advent-data.db     # schreibt migrations/data/legacy-2024.json neu
     git diff --stat migrations/data/                           # Änderungen ansehen, dann committen
     ```
   - `/srv/advent/umzug/data.db` bleibt als Kopie für die Rückfallebene liegen.
2. **Secrets erzeugen** (auf dem Arbeitsrechner, im Repo):
   ```bash
   make prod-secrets          # legt .env.prod.local an (Rechte 600, git-ignoriert), überschreibt nie
   make prod-show-secrets     # zeigt ADVENT_APP_SECRET  →  …  usw.
   ```
   Die drei Werte im **Passwortmanager** ablegen, danach `rm .env.prod.local`. Ab jetzt ist Komodo die Quelle.
3. **Komodo → Settings → Variables:** `ADVENT_APP_SECRET`, `ADVENT_MYSQL_PASSWORD` und `ADVENT_MYSQL_ROOT_PASSWORD` anlegen (bei Bedarf auch `ADVENT_SENTRY_DSN`), jeweils mit Häkchen **Secret**.
4. **GitHub:** Das Token des Komodo-Git-Accounts `rextuus` (Komodo → Settings → Providers, `github.com`) muss `rextuus/advent` lesen dürfen. Bei einem Fine-grained Token: GitHub → Settings → Developer settings → Fine-grained tokens → Token öffnen → Repository access → `rextuus/advent` hinzufügen, Recht „Contents: Read-only“.
5. **Auf abyss:**
   ```bash
   sudo install -d -m 700 /srv/advent/backups                     # Docker legt den Ordner absichtlich nicht selbst an
   docker ps -a --filter label=com.docker.compose.project=advent  # nur advent-php-1 und advent-caddy-1
   docker volume ls --filter name=advent_prod                     # advent_prod_mysql_data darf es noch nicht geben
   ```
6. **Code pushen** (committen, `main`).
7. **Resource Sync anlegen:**
   - Komodo → Syncs → New. Quelle: Git-Repo `rextuus/advent` (Account `rextuus`), Branch `main`, Resource Path `deploy/komodo/advent.toml`.
   - **„Delete unmatched resources“ aus lassen**, sonst löscht der Sync alles, was nicht in der Datei steht.
   - Ausführen. Er legt Stack `advent` und Procedure `advent-backup` an und deployt nichts (`deploy = false`).
8. **Kontrolle im Stack:**
   - Server `abyss`, Project Name `advent`, File Paths `compose.prod.yaml`, Env File Path `.env.prod.local`.
   - Run Build an, Pre/Post Deploy gesetzt, Ignore Services `migrate` und `backup`, Extra Args `--wait --wait-timeout 300`.
   - Beschreibung, Tags `advent` und `projekt`, vier Quick-Links im Kopf des Stacks. **Annahme:** Dass die Links dort erscheinen, ist aus dem Feldtyp abgeleitet, beim ersten Sync ansehen.
   - Procedure `advent-backup`: „Every day at 01:30“, Europe/Berlin, Schedule und Failure Alert an, Tags wie am Stack.

### B. Umschalten (Ausfallzeit)

Optional vorher auf dem VPS die Wartungsseite einschalten: `maintenance: true` im Inventar, dann `bin/gen-caddy` und `bin/caddy-deploy --apply`. Bei 10 Minuten im November ist das verzichtbar.

1. **Letzter Abgleich:** Hat sich seit A.1 etwas an den Daten geändert?
   ```bash
   sudo docker run --rm -v advent_app_data:/data:ro alpine:3 sha256sum /data/data.db
   ```
   Der Hash muss dem eingecheckten entsprechen. Sonst zurück zu A.1 (neu exportieren, pushen).
2. **Alten Stack stoppen**, ohne `-v`, damit `advent_app_data` bleibt:
   ```bash
   cd /opt/advent && sudo docker compose -p advent -f compose.prod.yaml down
   ss -ltn | grep ':7999 '                         # darf nichts mehr ausgeben
   docker volume ls --filter name=advent_app_data  # muss noch da sein
   ```
3. **Komodo: Stack `advent` → Deploy.** Im Log der Reihe nach:
   - Pre Deploy: „Noch keine Datenbank vorhanden – Sicherung übersprungen.“
   - Build (beim ersten Mal einige Minuten).
   - Up: alle „Healthy“, `migrate` „Exited“.
   - Post Deploy: `Webserver: {"status":"ok","database":"ok"}` und `Migrationen: [OK] Successfully migrated to version: DoctrineMigrations\Version20261111120000`.
   - Kontrolle der übernommenen Zeilen (24/77/5 beim Stand 05.02.2025): Stack → Service `migrate` → Log. Dort stehen `question: … Zeilen`, `choice: …` und `win_stage: …`.
4. **Admin neu anlegen** (fragt das Passwort verdeckt ab, mindestens 12 Zeichen):
   ```bash
   sudo docker exec -it advent-app-1 php bin/console app:user:set-password rextuus@gmail.com --create --admin
   ```
5. **Smoke-Test:**
   - vom VPS: `curl -s http://10.0.0.2:7999/healthz` → `{"status":"ok","database":"ok"}`
   - vom Arbeitsrechner: `curl -sI https://kresh.wh-company.com/` → `HTTP/2 200`
   - im Browser: Startseite (Journey) mit Styles, einmal durchklicken. Dann `/admin` → Login mit dem neuen Passwort → Fragenliste mit allen Türen.
     Kommt beim Login „Invalid CSRF token“, stimmt die Proxy-Kette nicht (siehe Fehlersuche).
   - Komodo: Stack „Running“, nicht „Unhealthy“.
   - Waisen-Check: `docker ps -a --filter label=com.docker.compose.project=advent` zeigt nur noch `app`, `web`, `database` und `migrate` (beendet).
6. **Sicherung testen:** Komodo → Procedure `advent-backup` → Run. Danach muss `sudo ls -l /srv/advent/backups` eine `advent-db-…-daily.sql.gz` mit `-rw-------` zeigen.

### Rückfallebene

Das alte Volume `advent_app_data` und `/opt/advent` bleiben bis Schritt D unangetastet. Geht etwas schief:

1. Neuen Stack stoppen: Komodo → Stack `advent` → **Stop**. Das stoppt nur `app`, `web` und `database`, die Volumes bleiben.
   **Nicht** den Stack in Komodo löschen: Das führt `down --remove-orphans` aus und würde dabei auch die alten Container entfernen, sobald sie wieder laufen.
2. Alten Stack starten: `cd /opt/advent && sudo docker compose -p advent -f compose.prod.yaml up -d`. Compose meldet dabei die neuen Container als Waisen, das ist harmlos.
3. Prüfen: `curl -s -o /dev/null -w '%{http_code}\n' http://10.0.0.2:7999/` → `200`.

Was nach dem Umschalten in MySQL geändert wurde (z. B. ein geöffnetes Türchen), fehlt im alten Stand. Im November ist das vernachlässigbar.

**Nochmal von vorn** (nur solange in MySQL nichts Neues zählt): Neuen Stack stoppen, dann `sudo docker volume rm advent_prod_mysql_data` und erneut deployen ab B.3. `migrate` legt das Schema an und importiert neu.

### C. Nach dem Umzug: homelab

Im Repo `homelab` den Eintrag `advent` in `inventory.yaml` ersetzen:

```yaml
  advent:
    description: Kresh-Journey / Adventskalender
    repo: rextuus/advent
    branch: main
    host: abyss
    komodo_stack: advent
    compose_project: advent
    status: live-komodo
    ingress: caddy
    domains:
      - kresh.wh-company.com
    port: 7999
    bind: 10.0.0.2
    caddy:
      comment: advent (Kresh-Journey)
      header_up: *proxy_headers # nicht nötig (reverse_proxy setzt X-Forwarded-* selbst), bleibt für ein unverändertes Caddyfile
    data:
      - Volume advent_prod_mysql_data (MySQL 8.4)
      - /srv/advent/backups
    backup:
      time: "01:30"
      what: DB
      target: /srv/advent/backups
      active: true
      notes: >-
        Komodo-Procedure advent-backup, täglich 01:30; dazu ein Dump vor jedem Deploy. Je Anlass (daily, pre-deploy,
        manuell) bleiben 14. Keine offsite_paths: keine Uploads/Medien, Bilder sind externe URLs.
    notes: >-
      Seit <DATUM> Komodo-Stack advent auf 10.0.0.2:7999 (vorher manuell aus /opt/advent mit SQLite im Volume
      advent_app_data). Datenübernahme SQLite → MySQL per Migration Version20261111120000 beim ersten Deploy; Admin neu
      angelegt. Keine Mails, keine Hintergrunddienste. advent_app_data und /opt/advent löschen, sobald die Daten in
      MySQL geprüft sind (Rückfallebene: docs/deployment.md im advent-Repo).
```

Danach im homelab-Repo:

```bash
bin/inventory              # Schema und Zusatzregeln
bin/gen-docs               # docs/generated/
bin/gen-caddy              # vps/Caddyfile – für advent sollte sich nichts ändern (gleicher Port, gleicher Block)
bin/gen-offsite            # nimmt /srv/advent/backups in die Offsite-Sicherung auf
bin/caddy-deploy           # Trockenlauf, Diff ansehen
bin/caddy-deploy --apply   # nur nötig, wenn der Trockenlauf einen Unterschied zeigt (oder für maintenance)
bin/check
```

`docs/patches/advent.md` im homelab-Repo ist damit erledigt.

### D. Aufräumen (nach ein paar Tagen ohne Probleme)

Erst wenn die Daten in MySQL geprüft sind und mindestens ein `daily`-Dump existiert:

```bash
sudo docker volume rm advent_app_data
sudo rm -rf /opt/advent /srv/advent/umzug
```

Im Repo (eigene Entscheidung): `bratibipfel_data.db` und `.bak` sind versioniert und enthalten den alten Passwort-Hash. Sie werden nicht mehr gebraucht. Ob sie entfernt werden (und ggf. aus der Historie), entscheidest du.

---

## Was bei einem Deploy passiert

1. **Git:** Beim ersten Mal klont Komodo nach `/etc/komodo/stacks/advent`, danach `git pull`. „Reclone“ ist aus, Daten liegen ohnehin nicht im Ordner.
2. **Env-Datei:** Komodo schreibt das Environment mit eingesetzten Secrets nach `.env.prod.local`.
3. **Pre Deploy** (`sh deploy/komodo/pre-deploy.sh`, im Periphery-Container). Das Skript bricht ab, wenn
   - die Env-Datei fehlt,
   - noch ein unaufgelöster Doppelklammer-Verweis darin steht,
   - Projektname und `VOLUME_PREFIX` nicht zusammenpassen.

   Sonst sichert es die DB (`run --rm --no-deps backup pre-deploy`). Auf einem leeren Rechner überspringt es die Sicherung. Ist das Volume da, der Container aber gestoppt, startet es die DB für die Sicherung. **Exit ≠ 0 bricht den Deploy ab, nichts wird verändert.**
4. `compose config` und `compose build` (Run Build).
5. `compose up -d --wait --wait-timeout 300`: `migrate` → `app` → `web`. Erfolgreich ist der Deploy erst, wenn alles gesund ist. Kein `--remove-orphans`: Ein umbenannter oder entfernter Dienst läuft weiter, bis man ihn von Hand entfernt.
6. **Post Deploy:** Zustand, `/healthz` und Migrationsergebnis ins Log, danach `docker image prune` **nur** für Images mit dem Label `com.docker.compose.project=advent`.

## Deploy im Alltag

Lokal committen, `git push`, dann in Komodo **Deploy**. Webhook und Auto-Update sind bewusst aus.

Entity-Änderungen brauchen eine Migration: lokal `make migration`, prüfen, committen. `migrate` spielt sie beim Deploy ein.

## Rollback

- **Code:** Im Stack unter **Commit** den letzten guten Hash eintragen und **Deploy**, danach das Feld wieder leeren. Ein Resource Sync setzt das Feld ohnehin auf `commit = ""` aus `advent.toml` zurück.
- **Migrationen** laufen nur vorwärts. Hat die neue Version die DB umgebaut, zusätzlich den Dump vom Deploy (`…-pre-deploy.sql.gz`) einspielen, siehe „Wiederherstellen“.
- **Scheitert `migrate`**, meldet Komodo den Deploy als fehlgeschlagen. `app` ist dann schon ersetzt, startet aber nicht: **Die Seite ist unten, bis du handelst.**
  - Log ansehen: Stack → Service `migrate` → Log.
  - Dann Fehler beheben und neu deployen, oder zurückrollen wie oben.
  - MySQL kann Tabellenänderungen nicht zurücknehmen, deshalb im Zweifel den Pre-Deploy-Dump einspielen.

## Sicherung (lokal auf abyss)

| Wann | Wer | Datei in `/srv/advent/backups` | Bleiben liegen |
|---|---|---|---|
| täglich 01:30 (Europe/Berlin) | Komodo-Procedure `advent-backup` | `advent-db-<UTC-Zeit>-daily.sql.gz` | 14 (`BACKUP_KEEP`) |
| vor jedem Deploy | Pre Deploy | `advent-db-<UTC-Zeit>-pre-deploy.sql.gz` | 14 |
| von Hand | du | `advent-db-<UTC-Zeit>-manuell.sql.gz` | 14 |

- **Uhrzeit:** 01:30 ist in `homelab/inventory.yaml` frei (Komodo 01:00, oralcare 02:30, debes 03:00, wedora 03:30). Das liegt vor dem automatischen Neustart von abyss um 04:30 und vor der Offsite-Sicherung um 05:15. Der Dump dauert wenige Sekunden.
- **Rotation** je Anlass getrennt, damit viele Deploys nicht die täglichen Dumps verdrängen.
- **Ein Dump wird erst unter seinem Namen abgelegt, wenn er vollständig ist** (Abschlusszeile, mindestens ein `CREATE TABLE`, `gzip -t`). Dateien 600, Ordner 700, Besitzer root.
- **Abbruch**, wenn im Root-Passwort ein unaufgelöster Verweis steht.
- **`no_deps`:** Die Procedure startet nichts nebenbei. Läuft der Stack nicht, scheitert der Dump absichtlich („Unknown MySQL server host 'database'“), und Komodo alarmiert.
- **Von Hand:** Procedure `advent-backup` → Run. Oder auf abyss:
  ```bash
  cd /etc/komodo/stacks/advent
  sudo docker compose -p advent -f compose.prod.yaml --env-file .env.prod.local run --rm --no-deps backup manuell
  ```

## Außer Haus (Offsite)

Die nächtliche Offsite-Sicherung von abyss (restic → Backblaze B2, 05:15, Stack `offsite-abyss` im Repo homelab) nimmt `/srv/advent/backups` automatisch mit, sobald der Inventar-Eintrag `backup.active: true` hat (Abschnitt C). Weitere Pfade braucht Advent nicht. Wiederherstellen aus der Offsite-Sicherung: siehe `homelab/docs/offsite.md`. Den geholten Dump nach `/srv/advent/backups` legen und wie unten einspielen.

## Wiederherstellen (Datenbank)

```bash
cd /etc/komodo/stacks/advent
DC="sudo docker compose -p advent -f compose.prod.yaml --env-file .env.prod.local"
sudo ls -1 /srv/advent/backups                   # Dump auswählen
$DC stop app web                                 # niemand schreibt während des Einspielens
$DC run --rm --no-deps -T --entrypoint sh backup -c 'gunzip -c /backups/advent-db-<zeit>-<anlass>.sql.gz | mysql -h database -u root'
$DC up -d --wait                                 # oder in Komodo „Deploy“
```

- Der Dump enthält `CREATE DATABASE IF NOT EXISTS`, ersetzt alle Tabellen und bringt auch den Stand der Migrationen mit.
- Die Zugangsdaten des App-Benutzers stecken nicht im Dump, sondern im Volume.
- Lokal geprüft: in eine frische DB eingespielt, Daten, Konten und `/healthz` wieder ok.

## Fehlersuche

- **Deploy-Log** (Stack → Updates):
  - Pre Deploy rot: Variablen oder Sicherung. Nichts wurde verändert.
  - Compose Up rot: Build, `migrate` oder ein Dienst wurde nicht gesund.
- **„Bind for 10.0.0.2:7999 failed: port is already allocated“:** Ein anderer Container hält den Port, beim Umzug der alte `advent-caddy-1`. Prüfen mit `docker ps --filter publish=7999`. Den alten Stack stoppen (B.2), dann erneut deployen.
- **„In Komodo fehlen diese Variablen/Secrets“:** Namen unter Settings → Variables anlegen (Schreibweise!) oder die Zeile aus dem Stack-Environment löschen, etwa `SENTRY_DSN` ohne Sentry.
- **„bind source path does not exist: /srv/advent/backups“:** `sudo install -d -m 700 /srv/advent/backups`, oder `BACKUP_DIR` ist vertippt.
- **„VOLUME_PREFIX ist gesetzt …“ / „Projekt … ohne VOLUME_PREFIX …“:** In Produktion gilt Project Name `advent` und kein `VOLUME_PREFIX` im Environment.
- **„… ist nicht lesbar – als root (sudo) aufrufen“:** Skripte und `make prod-*` auf abyss mit `sudo` aufrufen. Komodo schreibt die Env-Datei als root.
- **Procedure `advent-backup` scheitert:**
  - Läuft der Stack? Bei gestopptem Stack gibt es absichtlich keinen Dump.
  - „MYSQL_ROOT_PASSWORD fehlt oder ist ein unaufgelöstes …“: Secret `ADVENT_MYSQL_ROOT_PASSWORD` fehlt.
- **Clone/Pull rot:** Das Token des Accounts `rextuus` darf `rextuus/advent` nicht lesen (A.4).
- **Stack „Unhealthy“, obwohl alles läuft:** Ignore Services muss `migrate` und `backup` enthalten.
- **Ein Dienst wird nicht gesund:** `docker compose -p advent … ps`, dann `docker inspect --format '{{json .State.Health}}' advent-<dienst>-1`.
- **`/healthz` → 503 `degraded`:** PHP läuft, erreicht aber die DB nicht. `docker logs advent-database-1` ansehen und die Passwort-Variablen gegen den Passwortmanager prüfen.
- **Nach dem Umzug fehlen Fragen:** Log von `migrate` ansehen. „Datenbank enthält schon … Zeilen – Übernahme aus SQLite übersprungen“ heißt: Die DB war nicht leer. Neu anfangen wie unter „Rückfallebene“, „Nochmal von vorn“.
- **Login: „Invalid CSRF token“ oder Weiterleitung auf `http://`:** Symfony sieht die Anfrage nicht als `https://kresh.wh-company.com`. Prüfen:
  - `REVERSE_PROXY_IPS` = Absender-IP des VPS über WireGuard (`10.0.0.1`).
  - Der VPS-Caddy leitet per `reverse_proxy` weiter (der setzt `X-Forwarded-*`).
  - Test: `docker exec advent-web-1 wget -qS -O /dev/null http://127.0.0.1/admin 2>&1 | grep -i location`.
- **Fehler der App:** `docker logs -f advent-app-1`. PHP-Meldungen erscheinen als `NOTICE: PHP message: …`, mit Sentry zusätzlich dort.
- **Konsole:** `docker exec -it advent-app-1 php bin/console <befehl>` oder Komodo → Container `app` → Terminal.

### Bekannte Fehler in der App (unabhängig vom Deployment)

- `/register` → 500: `RegistrationFormType` übergibt `IsTrue` ein Options-Array, das Symfony 8 nicht mehr unterstützt.
- `/devtest`, `/demo` → 500: `templates/components/QuizForm.html.twig:52` verweist auf die Route `app_calendar`, die in `CalendarController` auskommentiert ist.

## Manueller Notweg (`make prod-*`)

Funktioniert aus dem Komodo-Ordner, denn dort liegt die von Komodo geschriebene `.env.prod.local`. `make` muss dafür auf abyss installiert sein:

```bash
cd /etc/komodo/stacks/advent
sudo make prod-up          # = Pre-Deploy-Sicherung + docker compose … up -d --build --wait (wie Komodo, ohne Post Deploy)
sudo make prod-status      # Container, /healthz, letzte Sicherung
sudo make prod-backup      # Dump, Anlass „manuell“
```

## Lokale Entwicklung (MySQL)

Die Dev-Umgebung (`compose.yaml`) nutzt ebenfalls MySQL 8.4.11, damit dieselben Migrationen lokal und in Produktion laufen. Einmalig:

1. In der lokalen `.env` (nicht im Repo) `DATABASE_URL` ersetzen:
   ```dotenv
   DATABASE_URL="mysql://app:app@database:3306/app?serverVersion=8.4.11&charset=utf8mb4"
   ```
2. `make up` (baut das Dev-Image mit `pdo_mysql` neu), dann `make db`. Die Migrationen legen das Schema an und spielen die Daten aus `migrations/data/legacy-2024.json` ein.
3. Lokalen Admin anlegen: `make console CMD="app:user:set-password <mail> --create --admin"`.

`npm install` nutzt `install-links=true` aus `.npmrc`, sonst bricht npm an den `file:`-Paketen aus `vendor/symfony/ux-*` ab.

## Generalprobe auf dem eigenen Rechner

Immer mit **eigenem Projektnamen und eigenem `VOLUME_PREFIX`** (pre-deploy.sh erzwingt das):

```bash
make prod-secrets PROD_ENV=/tmp/advent-probe.env
# in der Datei: VOLUME_PREFIX=adventprobe, HTTP_BIND=127.0.0.1, HTTP_PORT=18799, BACKUP_DIR=/tmp/advent-probe-backups,
#               DEFAULT_URI=http://127.0.0.1:18799, REVERSE_PROXY_IPS=127.0.0.1
install -d -m 700 /tmp/advent-probe-backups
make prod-up PROD_PROJECT=adventprobe PROD_ENV=/tmp/advent-probe.env
curl -s http://127.0.0.1:18799/healthz
# aufräumen (löscht nur adventprobe_*):
docker compose -p adventprobe -f compose.prod.yaml --env-file /tmp/advent-probe.env --profile backup down -v
```

Realistischer im Periphery-Image (wie am 11.11. geprüft), Repo-Kopie und Backup-Ordner unter demselben Pfad eingehängt, weil der Docker-Daemon die Bind-Mounts auf dem Host auflöst:

```bash
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock -v "$PWD:$PWD" -v /tmp/advent-probe-backups:/tmp/advent-probe-backups \
  -w "$PWD" -e COMPOSE_PROJECT=adventprobe -e ENV_FILE=/tmp/advent-probe.env -v /tmp/advent-probe.env:/tmp/advent-probe.env \
  --entrypoint sh ghcr.io/moghtech/komodo-periphery:2 deploy/komodo/pre-deploy.sh
```
