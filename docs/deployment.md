# Advent auf abyss betreiben (Komodo)

Advent (Kresh-Journey und Adventskalender) läuft als Docker-Stack auf abyss und ist unter `https://kresh.wh-company.com` erreichbar. Deployt wird über **Komodo** (v2.3, Core und Periphery auf abyss), Quelle ist `rextuus/advent`, Branch `main`.

```
Besucher ──HTTPS──▶ VPS (Caddy, Zertifikat) ──WireGuard──▶ abyss 10.0.0.2:7999 (Advent-Caddy, HTTP) ──▶ PHP-FPM ──▶ MySQL
```

Am 09.11.2026 lokal geprüft, als Projekt `adventprobe` mit `VOLUME_PREFIX=adventprobe` im echten Periphery-Image (`ghcr.io/moghtech/komodo-periphery:2`, Compose v5.6.1):
- Erst-Deploy auf leeren Volumes (Pre Deploy überspringt die Sicherung, `migrate` legt das Schema an, alle Dienste gesund, Post Deploy zeigt `/healthz` ok) und zweiter Deploy bei laufender DB (Sicherung `pre-deploy`, Daten bleiben)
- Import der alten SQLite-Datenbank und Admin-Login mit den importierten Daten
- Sicherung `daily`/`manuell`/`pre-deploy` samt Rotation, Rechten und den Fehlerfällen: unaufgelöstes Secret, gestoppter Stack, fehlender Ordner, falscher Projektname/`VOLUME_PREFIX`
- Wiederherstellung aus dem Dump
- Kette der vertrauenswürdigen Proxys (fremde `X-Forwarded-*` wirkungslos, vom vertrauten Proxy `https://kresh…`)
- `make prod-up`/`prod-status`/`prod-backup` als Notweg

---

## Was auf dem Server läuft

| Dienst | Aufgabe | Von außen erreichbar? |
|---|---|---|
| `web` (Caddy 2.11) | Webserver (nur HTTP), liefert `public/` aus, reicht PHP an `app` weiter | ja, **nur** `HTTP_BIND:HTTP_PORT` = `10.0.0.2:7999` – für den VPS |
| `app` (PHP 8.5 FPM, Symfony 8) | die Anwendung | nein |
| `database` (MySQL 8.4.11) | Datenbank | nein |
| `migrate` | läuft bei jedem Deploy einmal: `doctrine:migrations:migrate`, dann beendet | nein |
| `backup` | Datenbank-Dump nach `/srv/advent/backups`, nur auf Abruf (vor jedem Deploy, täglich 03:45 über die Procedure `advent-backup`) | nein |

- **Startreihenfolge:** `database` (gesund) → `migrate` (erfolgreich beendet) → `app` (gesund) → `web`. `web` prüft per `/healthz` den ganzen Weg bis zur Datenbank.
- **Hintergrunddienste** (Worker, Cron, Scheduler) gibt es keine. **Mails** verschickt Advent nicht: Es ist kein Mailer installiert, deshalb gibt es kein `MAILER_DSN`.
- **Persistente Daten:** nur die Datenbank, im Volume **`advent_prod_mysql_data`**. Es gibt keine Uploads, alle Bilder sind externe URLs (Cloudinary).
- **Sitzungen** liegen im Container. Nach einem Deploy ist man in `/admin` also abgemeldet, das ist gewollt einfach gehalten.
- Der Volume-Name ist per `name:` festgenagelt und hängt nicht am Projektnamen. Er heißt bewusst nicht `advent_database_data`, denn so heißt das Volume der Entwicklungsumgebung.

Wichtige Dateien:

| Datei | Zweck |
|---|---|
| `compose.prod.yaml` | der Produktions-Stack |
| `docker/prod/` | Dockerfile (Ziele `prod` und `web`), Caddyfile, php.ini, FPM-Konfiguration |
| `deploy/komodo/advent.toml` | Komodo-Ressourcen: Stack `advent` und Procedure `advent-backup` |
| `deploy/komodo/pre-deploy.sh` | prüft Variablen und Projektname, sichert die DB vor dem Deploy |
| `deploy/komodo/post-deploy.sh` | Zustand und `/healthz` ins Log, alte Advent-Images löschen |
| `deploy/komodo/db-backup.sh` | Dump mit Rotation (läuft im Dienst `backup`) |
| `deploy/umzug/sqlite-to-mysql.sh` | einmaliger Import der alten SQLite-Datenbank |
| `.env.prod.dist` | alle Variablen, Secrets markiert, mit Namen der Komodo-Variablen |

---

## Variablen und Secrets

Komodo schreibt das Environment des Stacks bei jedem Deploy nach `/etc/komodo/stacks/advent/.env.prod.local` (Rechte 600). Nicht geheime Werte stehen direkt in `deploy/komodo/advent.toml`. Secrets werden dort als Komodo-Variable referenziert.

| Komodo-Variable (Secret) | Variable im Stack | Woher der Wert kommt |
|---|---|---|
| `ADVENT_APP_SECRET` | `APP_SECRET` | **neu**, `make prod-secrets` (64 Hex-Zeichen) |
| `ADVENT_MYSQL_PASSWORD` | `MYSQL_PASSWORD` | **neu**, `make prod-secrets` |
| `ADVENT_MYSQL_ROOT_PASSWORD` | `MYSQL_ROOT_PASSWORD` | **neu**, `make prod-secrets` |
| `ADVENT_SENTRY_DSN` (optional) | `SENTRY_DSN` | Sentry-Projekt → Client Keys. **Ohne Sentry:** die Zeile `SENTRY_DSN = …` im Stack-Environment löschen, statt eine leere Variable anzulegen. |

Nichts aus der alten `/opt/advent/.env` übernehmen. Die Datei war für alle lesbar und lag auf dem kompromittierten System.

Fest in `advent.toml`: `DEFAULT_URI=https://kresh.wh-company.com`, `HTTP_BIND=10.0.0.2`, `HTTP_PORT=7999`, `REVERSE_PROXY_IPS=10.0.0.1`, `MYSQL_DATABASE=app`, `MYSQL_USER=app`, `BACKUP_DIR=/srv/advent/backups`, `BACKUP_KEEP=14`.

> **Die DB-Passwörter gelten ab dem ersten Start fest.** MySQL legt sie beim allerersten Start im Volume an. Wer sie später in Komodo ändert, sperrt die App aus. Deshalb gehören sie gleich nach dem Erzeugen in den Passwortmanager.

---

## Umzug und erster Deploy (einmalig)

**Ausgangslage:**
- Advent läuft nirgends. Der alte Stand auf dem früheren abyss (`/opt/advent`, `compose.yaml` mit Override, also `APP_ENV=dev`, Profiler öffentlich, Postgres-Port 32816 offen) ist mit der Neuinstallation weg.
- Die Postgres-DB dort war leer, weil die App **nie Postgres benutzt hat**: Sie lief mit SQLite (`var/data.db`).
- Die einzigen vorhandenen Daten sind die lokale `var/data.db` vom 05.02.2025 (Adventskalender 2024: 24 Fragen, 77 Antworten, 5 Gewinnstufen, 1 Admin-Konto). Sie wurde nach MySQL übertragen. Das Ergebnis liegt als normaler Dump in `backups/umzug/advent-db-20261109T001509Z-umzug.sql.gz` (in Git ignoriert, sha256 `b2c00a82…`).

**Ziel:** Komodo-Stack `advent`, Projekt `advent`, Volume `advent_prod_mysql_data`, Daten aus dem Umzugs-Dump, Admin-Passwort neu.

**Erwartete Ausfallzeit:** keine, es läuft ja nichts. Die Domain ist erst erreichbar, wenn der Caddy-Block auf dem VPS steht (Schritt C).

### A. Vorbereitung

1. **Secrets erzeugen** (auf dem Arbeitsrechner, im Repo):
   ```bash
   make prod-secrets          # legt .env.prod.local an (Rechte 600, git-ignoriert), überschreibt nie
   make prod-show-secrets     # zeigt ADVENT_APP_SECRET  →  …  usw.
   ```
   Die drei Werte im **Passwortmanager** ablegen. Danach die lokale Datei löschen (`rm .env.prod.local`). Ab jetzt ist Komodo die Quelle.
2. **Komodo → Settings → Variables:** `ADVENT_APP_SECRET`, `ADVENT_MYSQL_PASSWORD`, `ADVENT_MYSQL_ROOT_PASSWORD` (und ggf. `ADVENT_SENTRY_DSN`) anlegen, jeweils mit Häkchen **Secret**. Auf die Schreibweise achten.
3. **GitHub:** Das Token des Komodo-Git-Accounts `rextuus` (Settings → Providers → Git, `github.com`) muss `rextuus/advent` lesen dürfen. Bei einem Fine-grained Token: GitHub → Settings → Developer settings → Fine-grained tokens → Token öffnen → Repository access → `rextuus/advent` hinzufügen, Recht „Contents: Read-only“.
4. **Auf abyss:**
   ```bash
   sudo install -d -m 700 /srv/advent/backups          # Docker legt den Ordner absichtlich nicht selbst an
   ss -ltn | grep ':7999 '                             # darf nichts ausgeben
   docker ps -a --filter name=advent                   # keine alten Advent-Container
   docker volume ls --filter name=advent               # advent_prod_mysql_data darf es noch nicht geben
   ```
5. **Code pushen:** Die Änderungen committen und nach `main` pushen.
6. **Gibt es in Komodo schon einen Stack `advent`** (z. B. von Hand angelegt)? Dann vorher entschärfen: Server leeren, speichern, erst dann löschen. Komodo führt beim Löschen eines laufenden Stacks `docker compose down` aus. Hinweis: Das Verhalten, dass ein Stack ohne Server als „Down“ gilt, habe ich bei Wedora aus dem Quellcode übernommen und hier nicht neu geprüft.
7. **Resource Sync anlegen:**
   - Syncs → New, Quelle Git-Repo `rextuus/advent` (Account `rextuus`), Branch `main`, Resource Path `deploy/komodo/advent.toml`.
   - **„Delete unmatched resources“ aus lassen**, sonst löscht der Sync alles, was nicht in der Datei steht, auch Wedora.
   - Ausführen. Der Sync legt Stack `advent` und Procedure `advent-backup` an und deployt nichts (`deploy = false`).
8. **Kontrolle im Stack:**
   - Server `abyss`, Project Name `advent`, File Paths `compose.prod.yaml`, Env File Path `.env.prod.local`
   - Run Build an, Pre/Post Deploy gesetzt, Ignore Services `migrate`, `backup`, Extra Args `--wait --wait-timeout 300`
   - In der Procedure: „Every day at 03:45“, Europe/Berlin, Schedule und Failure Alert an.

### B. Erster Deploy und Datenübernahme

1. **Komodo: Stack `advent` → Deploy.** Im Log der Reihe nach:
   - Pre Deploy: „Noch keine Datenbank vorhanden – Sicherung übersprungen.“
   - Build (dauert beim ersten Mal einige Minuten: PHP-Extensions, Composer, npm)
   - Up: alle „Healthy“, `migrate` „Exited“
   - Post Deploy: `Webserver: {"status":"ok","database":"ok"}`, Migration `Version20261109001047` ausgeführt
2. **Umzugs-Dump auf abyss bringen** (vom Arbeitsrechner):
   ```bash
   scp backups/umzug/advent-db-20261109T001509Z-umzug.sql.gz master@abyss:/tmp/
   ssh -t master@abyss 'sudo install -m 600 -o root -g root /tmp/advent-db-20261109T001509Z-umzug.sql.gz /srv/advent/backups/ && rm /tmp/advent-db-20261109T001509Z-umzug.sql.gz'
   ```
3. **Einspielen** (auf abyss). Der Dump ersetzt das leere Schema und enthält den Migrationsstand:
   ```bash
   cd /etc/komodo/stacks/advent
   DC="sudo docker compose -p advent -f compose.prod.yaml --env-file .env.prod.local"
   $DC stop app web
   $DC run --rm --no-deps -T --entrypoint sh backup -c 'gunzip -c /backups/advent-db-20261109T001509Z-umzug.sql.gz | mysql -h database -u root'
   $DC up -d --wait
   ```
4. **Admin-Passwort neu setzen.** Das Passwort im Dump ist ein unbekannter Zufallswert aus dem Probelauf. Der ursprüngliche Hash liegt außerdem in der Git-Historie (`bratibipfel_data.db`) und gilt als verbrannt.
   ```bash
   docker exec -it advent-app-1 php bin/console app:user:set-password rextuus@gmail.com
   # neues Konto: … app:user:set-password <mail> --create --admin
   ```
5. **Sicherung testen:** Komodo → Procedure `advent-backup` → Run. Danach muss `sudo ls -l /srv/advent/backups` eine `advent-db-…-daily.sql.gz` mit `-rw-------` zeigen.

### C. VPS: Caddy-Block

Auf dem VPS in die Caddy-Konfiguration aufnehmen bzw. prüfen, ob es den Block schon gibt:

```caddyfile
kresh.wh-company.com {
	reverse_proxy 10.0.0.2:7999
}
```

Danach `sudo systemctl reload caddy` (oder `caddy reload`, je nach Einrichtung). Der DNS-Eintrag für `kresh.wh-company.com` muss auf den VPS zeigen, sonst bekommt Caddy kein Zertifikat.

### D. Smoke-Test

- vom VPS: `curl -s http://10.0.0.2:7999/healthz` → `{"status":"ok","database":"ok"}`
- vom Arbeitsrechner: `curl -sI https://kresh.wh-company.com/` → `HTTP/2 200`
- im Browser: Startseite (Journey) mit Styles, einmal durchklicken. Dann `/admin` → Login mit dem neuen Passwort → Fragenliste mit den 24 Türen.
  Der Login prüft den `Origin`-Header gegen `https://kresh.wh-company.com`. Klappt er nicht („Invalid CSRF token“), stimmen `REVERSE_PROXY_IPS` und die Proxy-Kette nicht (siehe Fehlersuche).
- In Komodo: Stack „Running“ (nicht „Unhealthy“)
- `docker volume ls --filter name=advent` → `advent_prod_mysql_data` (dazu ggf. `advent_database_data`, falls jemand auf abyss die Dev-Compose gestartet hat; das sollte nicht passieren)

### Rückfallebene

Es gab vorher keinen laufenden Stand, auf den man zurück könnte. Der alte Dev-Betrieb aus `/opt/advent` soll auch nicht wiederkommen. Geht etwas schief:

- **Seite vom Netz nehmen:** Caddy-Block auf dem VPS auskommentieren und neu laden. Oder in Komodo **Stop**: Die Volumes bleiben.
- **Daten verkorkst:** Der Umzugs-Dump liegt unverändert in `/srv/advent/backups` und lokal in `backups/umzug/`. Die Quelle `var/data.db` liegt weiter auf dem Arbeitsrechner. Nochmal einspielen wie in B.3.
- **Ganz von vorn** (nur solange keine neuen Daten zählen!): `cd /etc/komodo/stacks/advent && sudo docker compose -p advent -f compose.prod.yaml --env-file .env.prod.local down -v`. Dabei wird `advent_prod_mysql_data` gelöscht, danach Deploy ab B.1.

### Bekannte Fehler in der App (unabhängig vom Deployment)

Diese Fehler tauchen beim Smoke-Test auf und sind auch lokal da:
- `/register` → 500: `RegistrationFormType` übergibt `IsTrue` ein Options-Array, das Symfony 8 nicht mehr unterstützt.
- `/devtest`, `/demo` → 500: `templates/components/QuizForm.html.twig:52` verweist auf die Route `app_calendar`, die in `CalendarController` auskommentiert ist.

---

## Was bei einem Deploy passiert

1. **Git:** Beim ersten Mal klont Komodo nach `/etc/komodo/stacks/advent`, danach `git pull`. „Reclone“ ist aus. Daten liegen ohnehin nicht im Ordner.
2. **Env-Datei:** Komodo schreibt das Environment mit eingesetzten Secrets nach `.env.prod.local`.
3. **Pre Deploy** (`sh deploy/komodo/pre-deploy.sh`, im Periphery-Container). Das Skript bricht ab, wenn:
   - die Env-Datei fehlt
   - noch ein unaufgelöster Doppelklammer-Verweis darin steht
   - Projektname und `VOLUME_PREFIX` nicht zusammenpassen
   
   Sonst sichert es die DB (`run --rm --no-deps backup pre-deploy`). Auf einem leeren Rechner überspringt es die Sicherung. Ist das Volume da, der Container aber gestoppt, startet es die DB für die Sicherung. **Exit ≠ 0 = Deploy abgebrochen, nichts verändert.**
4. `compose config`, `compose build` (Run Build).
5. `compose up -d --wait --wait-timeout 300`: `migrate` → `app` → `web`. Erfolg erst, wenn alles gesund ist.
6. **Post Deploy:** Zustand, `/healthz` und Migrationsausgabe ins Log, danach `docker image prune` **nur** für Images mit dem Label `com.docker.compose.project=advent`.

## Deploy im Alltag

Lokal committen, `git push`, dann in Komodo **Deploy**. Webhook und Auto-Update sind bewusst aus.

Neue Entity-Änderungen brauchen eine Migration: lokal `make migration`, prüfen, committen. `migrate` spielt sie beim Deploy ein.

## Rollback

- **Code:** Im Stack unter **Commit** den letzten guten Hash eintragen und **Deploy**, danach das Feld wieder leeren. Ein Resource Sync setzt das Feld ohnehin auf `commit = ""` aus `advent.toml` zurück.
- **Migrationen** laufen nur vorwärts. Hat die neue Version die DB umgebaut, zusätzlich den Dump vom Deploy (`…-pre-deploy.sql.gz`) einspielen, siehe „Wiederherstellen“.
- **Scheitert `migrate`**, meldet Komodo den Deploy als fehlgeschlagen. `app` ist dann schon ersetzt, startet aber nicht: **Die Seite ist unten, bis du handelst.** Log ansehen (Stack → Service `migrate` → Log), dann Fehler beheben und neu deployen, oder zurückrollen wie oben. MySQL kann Tabellenänderungen nicht zurücknehmen, deshalb im Zweifel den Pre-Deploy-Dump einspielen.

## Sicherung (lokal auf abyss)

| Wann | Wer | Datei in `/srv/advent/backups` | Bleiben liegen |
|---|---|---|---|
| täglich 03:45 (Europe/Berlin) | Komodo-Procedure `advent-backup` | `advent-db-<UTC-Zeit>-daily.sql.gz` | 14 (`BACKUP_KEEP`) |
| vor jedem Deploy | Pre Deploy | `advent-db-<UTC-Zeit>-pre-deploy.sql.gz` | 14 |
| von Hand | du | `advent-db-<UTC-Zeit>-manuell.sql.gz` | 14 |

- **Uhrzeit:** 03:45 liegt nach Wedora (03:30) und vor dem automatischen Neustart von abyss um 04:30. Der Dump dauert wenige Sekunden.
- **Rotation** je Anlass getrennt.
- **Ein Dump wird erst unter seinem Namen abgelegt, wenn er vollständig ist** (Abschlusszeile, mindestens ein `CREATE TABLE`, `gzip -t`). Dateien 600, Ordner 700, Besitzer root.
- **Abbruch** bei einem unaufgelösten Verweis im Root-Passwort.
- **`no_deps`:** Die Procedure startet nichts nebenbei. Läuft der Stack nicht, scheitert der Dump absichtlich („Unknown MySQL server host 'database'“), und Komodo alarmiert.
- **Von Hand:** Procedure `advent-backup` → Run, oder auf abyss:
  ```bash
  cd /etc/komodo/stacks/advent
  sudo docker compose -p advent -f compose.prod.yaml --env-file .env.prod.local run --rm --no-deps backup manuell
  ```

## Wiederherstellen (Datenbank)

```bash
cd /etc/komodo/stacks/advent
DC="sudo docker compose -p advent -f compose.prod.yaml --env-file .env.prod.local"
sudo ls -1 /srv/advent/backups                   # Dump auswählen
$DC stop app web                                 # niemand schreibt während des Einspielens
$DC run --rm --no-deps -T --entrypoint sh backup -c 'gunzip -c /backups/advent-db-<zeit>-<anlass>.sql.gz | mysql -h database -u root'
$DC up -d --wait                                 # oder in Komodo „Deploy“
```

Der Dump enthält `CREATE DATABASE IF NOT EXISTS` und ersetzt alle Tabellen. Die Zugangsdaten des App-Benutzers stecken nicht im Dump, sondern im Volume. Lokal geprüft: DB gelöscht, eingespielt, Daten und `/healthz` wieder ok.

**Aus der Kopie auf dem Arbeitsrechner:**
```bash
rsync -a --rsync-path='sudo rsync' ~/advent-sicherung/db/<datei> master@abyss:/srv/advent/backups/
```
Dann wie oben einspielen.

## Kopie auf den Arbeitsrechner (von Hand)

Alles oben liegt nur auf abyss. Deshalb regelmäßig (z. B. wöchentlich und vor dem Dezember) vom Arbeitsrechner ziehen. Medien gibt es bei Advent keine, die Dumps reichen:

```bash
mkdir -p ~/advent-sicherung/db
rsync -a --rsync-path='sudo rsync' master@abyss:/srv/advent/backups/ ~/advent-sicherung/db/
```

- `--rsync-path='sudo rsync'` braucht auf abyss sudo ohne Passwort für rsync (wie bei Wedora: `master ALL=(root) NOPASSWD: /usr/bin/rsync` in `/etc/sudoers.d/rsync`). Ohne das:
  ```bash
  ssh -t master@abyss 'sudo tar -C /srv/advent -czf /tmp/advent-db.tgz backups && sudo chown $USER /tmp/advent-db.tgz'
  scp master@abyss:/tmp/advent-db.tgz ~/advent-sicherung/ && ssh master@abyss 'rm /tmp/advent-db.tgz'
  ```
- Ohne `--delete`: Was auf abyss rotiert wird, bleibt lokal liegen. Gelegentlich von Hand ausdünnen.
- Die Dumps enthalten Passwort-Hashes: lokal nur auf einem verschlüsselten Datenträger ablegen.

## Fehlersuche

- **Deploy-Log** (Stack → Updates): Pre Deploy rot = Variablen oder Sicherung, nichts wurde verändert. Compose Up rot = Build, `migrate` oder ein Dienst wurde nicht gesund.
- **„In Komodo fehlen diese Variablen/Secrets“:** Namen unter Settings → Variables anlegen (Schreibweise!) oder die Zeile aus dem Stack-Environment löschen, etwa `SENTRY_DSN` ohne Sentry.
- **„bind source path does not exist: /srv/advent/backups“:** `sudo install -d -m 700 /srv/advent/backups`, oder `BACKUP_DIR` ist vertippt.
- **„VOLUME_PREFIX ist gesetzt …“ / „Projekt … ohne VOLUME_PREFIX …“:** In Produktion: Project Name `advent`, kein `VOLUME_PREFIX` im Environment.
- **„… ist nicht lesbar – als root (sudo) aufrufen“:** Skripte und `make prod-*` auf abyss mit `sudo` aufrufen. Komodo schreibt die Env-Datei als root.
- **Procedure `advent-backup` scheitert:** Läuft der Stack? (gewollt: kein Dump bei gestopptem Stack). „MYSQL_ROOT_PASSWORD fehlt oder ist ein unaufgelöstes …“ → Secret `ADVENT_MYSQL_ROOT_PASSWORD` fehlt.
- **Clone/Pull rot:** Token des Accounts `rextuus` darf `rextuus/advent` nicht lesen (A.3).
- **Stack „Unhealthy“, obwohl alles läuft:** Ignore Services muss `migrate` und `backup` enthalten.
- **Ein Dienst wird nicht gesund:** `docker compose -p advent … ps`, dann `docker inspect --format '{{json .State.Health}}' advent-<dienst>-1`.
- **`/healthz` → 503 `degraded`:** PHP läuft, erreicht aber die DB nicht. `docker logs advent-database-1` ansehen, Passwort-Variablen gegen den Passwortmanager prüfen.
- **Login: „Invalid CSRF token“ oder Weiterleitung auf `http://`:** Symfony sieht die Anfrage nicht als `https://kresh.wh-company.com`. Prüfen:
  - `REVERSE_PROXY_IPS` = Absender-IP des VPS über WireGuard (`10.0.0.1`)
  - Der VPS-Caddy leitet per `reverse_proxy` weiter (der setzt `X-Forwarded-*`)
  - Test: `docker exec advent-web-1 wget -qS -O /dev/null http://127.0.0.1/admin 2>&1 | grep -i location`
- **Fehler der App:** `docker logs -f advent-app-1` (PHP-Meldungen erscheinen als `NOTICE: PHP message: …`). Mit Sentry zusätzlich dort.
- **Konsole:** `docker exec -it advent-app-1 php bin/console <befehl>` oder Komodo → Container `app` → Terminal.

## Manueller Notweg (`make prod-*`)

Funktioniert aus dem Komodo-Ordner, denn dort liegt die von Komodo geschriebene `.env.prod.local`. `make` muss dafür auf abyss installiert sein:

```bash
cd /etc/komodo/stacks/advent
sudo make prod-up          # = Pre-Deploy-Sicherung + docker compose … up -d --build --wait (wie Komodo, ohne Post Deploy)
sudo make prod-status      # Container, /healthz, letzte Sicherung
sudo make prod-backup      # Dump, Anlass „manuell“
```

## Lokale Entwicklung (seit der Umstellung auf MySQL)

Die Dev-Umgebung (`compose.yaml`) nutzt jetzt ebenfalls MySQL 8.4.11 statt SQLite, damit dieselben Migrationen lokal und in Produktion laufen. Einmalig:

1. In der lokalen `.env` (nicht im Repo) `DATABASE_URL` ersetzen:
   ```dotenv
   DATABASE_URL="mysql://app:app@database:3306/app?serverVersion=8.4.11&charset=utf8mb4"
   ```
2. `make up` (baut das Dev-Image mit `pdo_mysql` neu), dann `make db` (Migrationen).
3. Den Datenstand von früher holen: `make db-restore DUMP=backups/umzug/advent-db-20261109T001509Z-umzug.sql.gz`. Danach das lokale Admin-Passwort setzen: `make console CMD="app:user:set-password rextuus@gmail.com"`.

`var/data.db` und `bratibipfel_data.db` werden danach nicht mehr gebraucht. `bratibipfel_data.db` ist versioniert und enthält einen Passwort-Hash. Das Entfernen aus dem Repo (und ggf. aus der Historie) ist eine eigene Entscheidung.

`npm install` nutzt jetzt `install-links=true` aus `.npmrc`, sonst bricht npm an den `file:`-Paketen aus `vendor/symfony/ux-*` ab. Der Lockfile wurde dafür ergänzt.

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
