<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Einmaliger Umzug SQLite → MySQL: spielt den Datenstand der alten SQLite-Datenbank (migrations/data/legacy-2024.json,
 * erzeugt mit deploy/umzug/export-sqlite.sh) ein. Läuft beim ersten Deploy im Dienst migrate, nur in eine leere
 * Datenbank – stehen schon Daten drin (z. B. aus einem eingespielten Dump), fügt sie nichts ein.
 * Konten werden nicht übernommen; den Admin danach mit app:user:set-password --create --admin anlegen.
 */
final class Version20261111120000 extends AbstractMigration
{
    // Reihenfolge wegen des Fremdschlüssels choice → question
    private const COLUMNS = [
        'question' => ['id', 'content', 'door_number', 'opened', 'triggered_choice', 'image_url'],
        'choice' => ['id', 'question_id', 'content', 'response', 'is_correct', 'response_image_url'],
        'win_stage' => ['id', 'point_border', 'point_text', 'win_text'],
    ];

    public function getDescription(): string
    {
        return 'Datenstand aus der alten SQLite-Datenbank übernehmen (Fragen, Antworten, Gewinnstufen)';
    }

    public function up(Schema $schema): void
    {
        $existing = 0;
        foreach (array_keys(self::COLUMNS) as $table) {
            $existing += (int) $this->connection->fetchOne("SELECT COUNT(*) FROM {$table}");
        }
        // Bewusst kein skipIf(): Übersprungene Migrationen vermerkt Doctrine nicht, sie liefe bei jedem Deploy erneut
        // und würde eine später geleerte Datenbank wieder befüllen. So gilt sie als ausgeführt (ohne SQL).
        if ($existing > 0) {
            $this->write("  Datenbank enthält schon {$existing} Zeilen – Übernahme aus SQLite übersprungen.");

            return;
        }

        $data = json_decode(file_get_contents(__DIR__.'/data/legacy-2024.json'), true, flags: \JSON_THROW_ON_ERROR);

        foreach (self::COLUMNS as $table => $columns) {
            $rows = $data['tables'][$table] ?? [];
            $placeholders = implode(', ', array_fill(0, \count($columns), '?'));
            foreach ($rows as $row) {
                $missing = array_diff($columns, array_keys($row));
                $this->abortIf([] !== $missing, "{$table}: Spalten fehlen in der Datei: ".implode(', ', $missing));
                $this->addSql(
                    "INSERT INTO {$table} (".implode(', ', $columns).") VALUES ({$placeholders})",
                    array_map(static fn (string $column) => $row[$column], $columns),
                );
            }
            $this->write(\sprintf('  %s: %d Zeilen', $table, \count($rows)));
        }
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DELETE FROM choice');
        $this->addSql('DELETE FROM question');
        $this->addSql('DELETE FROM win_stage');
    }
}
