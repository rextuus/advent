<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20261109001047 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Ausgangsschema für MySQL (bisher SQLite ohne Migrationen)';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE choice (
              id INT AUTO_INCREMENT NOT NULL,
              content VARCHAR(1000) NOT NULL,
              response VARCHAR(1000) NOT NULL,
              is_correct TINYINT NOT NULL,
              response_image_url VARCHAR(1000) DEFAULT NULL,
              question_id INT NOT NULL,
              INDEX IDX_C1AB5A921E27F6BF (question_id),
              PRIMARY KEY (id)
            ) DEFAULT CHARACTER SET utf8mb4
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE question (
              id INT AUTO_INCREMENT NOT NULL,
              content VARCHAR(1000) NOT NULL,
              door_number INT NOT NULL,
              opened DATETIME DEFAULT NULL,
              triggered_choice INT DEFAULT NULL,
              image_url VARCHAR(1000) DEFAULT NULL,
              PRIMARY KEY (id)
            ) DEFAULT CHARACTER SET utf8mb4
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE user (
              id INT AUTO_INCREMENT NOT NULL,
              email VARCHAR(180) NOT NULL,
              roles JSON NOT NULL,
              password VARCHAR(255) NOT NULL,
              UNIQUE INDEX UNIQ_IDENTIFIER_EMAIL (email),
              PRIMARY KEY (id)
            ) DEFAULT CHARACTER SET utf8mb4
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE win_stage (
              id INT AUTO_INCREMENT NOT NULL,
              point_border INT NOT NULL,
              point_text VARCHAR(255) NOT NULL,
              win_text VARCHAR(255) NOT NULL,
              PRIMARY KEY (id)
            ) DEFAULT CHARACTER SET utf8mb4
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE
              choice
            ADD
              CONSTRAINT FK_C1AB5A921E27F6BF FOREIGN KEY (question_id) REFERENCES question (id)
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE choice DROP FOREIGN KEY FK_C1AB5A921E27F6BF');
        $this->addSql('DROP TABLE choice');
        $this->addSql('DROP TABLE question');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE win_stage');
    }
}
