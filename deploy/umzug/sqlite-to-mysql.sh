#!/bin/sh
# Advent – einmaliger Umzug der alten SQLite-Datenbank (var/data.db) in die MySQL-Datenbank eines Stacks.
# Läuft auf dem Arbeitsrechner (braucht sqlite3 und docker), gegen einen Stack aus compose.prod.yaml, dessen
# Dienst migrate schon gelaufen ist (Tabellen vorhanden, aber leer). Ablauf: docs/deployment.md, „Umzug“.
#
#   COMPOSE_PROJECT=adventprobe ENV_FILE=/pfad/zur/env sh deploy/umzug/sqlite-to-mysql.sh var/data.db
#
# Bricht ab, wenn in MySQL schon Daten stehen. Alles läuft in einer Transaktion: entweder alles oder nichts.
set -eu

src=${1:?Aufruf: sqlite-to-mysql.sh <sqlite-datei>}
project=${COMPOSE_PROJECT:?COMPOSE_PROJECT setzen (Probelauf: adventprobe)}
env_file=${ENV_FILE:-.env.prod.local}
dc() { docker compose -p "$project" -f compose.prod.yaml --env-file "$env_file" "$@"; }
# mysql-Client im backup-Dienst (Image mysql:8.4.11), als root gegen den laufenden Dienst database
mysql_app() { dc run --rm --no-deps -T --entrypoint mysql backup -h database -u root --default-character-set=utf8mb4 "$@" app; }

command -v sqlite3 >/dev/null || { echo "sqlite3 fehlt (sudo apt install sqlite3)." >&2; exit 1; }
test -f "$src" || { echo "SQLite-Datei ${src} nicht gefunden." >&2; exit 1; }
test "$(sqlite3 "$src" 'PRAGMA integrity_check;')" = ok || { echo "${src} ist beschädigt (integrity_check)." >&2; exit 1; }

# In dieser Reihenfolge, damit die Fremdschlüssel (choice → question) passen.
tables="question choice user win_stage"

rows=$(mysql_app -N -e "SELECT (SELECT COUNT(*) FROM question)+(SELECT COUNT(*) FROM choice)+(SELECT COUNT(*) FROM user)+(SELECT COUNT(*) FROM win_stage)")
test "$rows" = 0 || { echo "In MySQL stehen schon ${rows} Zeilen – Import abgebrochen (nur in eine leere Datenbank)." >&2; exit 1; }

sql=$(mktemp)
trap 'rm -f "$sql"' EXIT
{
  echo "SET NAMES utf8mb4;"
  # sqlite3 schreibt Texte mit '' als Escape und ohne Backslash-Escapes; Bezeichner ggf. in "…".
  echo "SET SESSION sql_mode = CONCAT(@@sql_mode, ',NO_BACKSLASH_ESCAPES,ANSI_QUOTES');"
  echo "START TRANSACTION;"
  for t in $tables; do
    # Spalten namentlich (in MySQL ist die Reihenfolge teils anders als in SQLite)
    cols=$(sqlite3 "$src" "SELECT group_concat(name, ',') FROM pragma_table_info('$t');")
    sqlite3 -cmd ".headers on" -cmd ".mode insert $t" "$src" "SELECT $cols FROM $t ORDER BY id;"
  done
  echo "COMMIT;"
} > "$sql"

mysql_app < "$sql"

echo "Übernommen (SQLite → MySQL):"
for t in $tables; do
  a=$(sqlite3 "$src" "SELECT COUNT(*) FROM $t;")
  b=$(mysql_app -N -e "SELECT COUNT(*) FROM $t")
  printf '  %-10s %4s → %4s\n' "$t" "$a" "$b"
  test "$a" = "$b" || { echo "Anzahl stimmt nicht für ${t}." >&2; exit 1; }
done
