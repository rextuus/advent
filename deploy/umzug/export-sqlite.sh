#!/bin/sh
# Advent – einmaliger Umzug SQLite → MySQL, Teil 1: Inhalt der alten SQLite-Datenbank (var/data.db) als JSON nach
# migrations/data/legacy-2024.json schreiben. Teil 2 ist die Migration Version20261111120000: Sie spielt die Datei
# beim ersten Deploy (Dienst migrate) in die noch leere MySQL-Datenbank ein. Ablauf: docs/deployment.md, „Umzug“.
#
# Läuft auf dem Arbeitsrechner (braucht sqlite3 und jq), im Repo-Ordner:
#   sh deploy/umzug/export-sqlite.sh /pfad/zur/data.db
#
# Die Tabelle user wird bewusst NICHT übernommen (Passwort-Hash gehört nicht ins Repo). Den Admin nach dem Deploy
# neu anlegen: php bin/console app:user:set-password <mail> --create --admin
set -eu

src=${1:?Aufruf: export-sqlite.sh <sqlite-datei>}
out=migrations/data/legacy-2024.json

command -v sqlite3 >/dev/null || { echo "sqlite3 fehlt (sudo apt install sqlite3)." >&2; exit 1; }
command -v jq >/dev/null || { echo "jq fehlt (sudo apt install jq)." >&2; exit 1; }
test -f "$src" || { echo "SQLite-Datei ${src} nicht gefunden." >&2; exit 1; }
test -d migrations || { echo "Im Repo-Ordner aufrufen (migrations/ fehlt)." >&2; exit 1; }
test "$(sqlite3 -readonly "$src" 'PRAGMA integrity_check;')" = ok || { echo "${src} ist beschädigt (integrity_check)." >&2; exit 1; }

# Je Tabelle die Zeilen als JSON-Liste (sqlite3 gibt bei leerer Tabelle nichts aus → []).
rows() { sqlite3 -readonly -json "$src" "SELECT * FROM $1 ORDER BY id;" | jq -s 'add // []'; }

mkdir -p "$(dirname "$out")"
jq -n \
  --arg sha256 "$(sha256sum "$src" | cut -d' ' -f1)" \
  --argjson question "$(rows question)" \
  --argjson choice "$(rows choice)" \
  --argjson win_stage "$(rows win_stage)" \
  '{source: {sha256: $sha256}, tables: {question: $question, choice: $choice, win_stage: $win_stage}}' > "$out"

echo "Geschrieben: ${out}"
jq -r '.tables | to_entries[] | "  \(.key): \(.value | length) Zeilen"' "$out"
