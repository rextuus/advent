# Advent – Kresh-Journey

Eine kleine Symfony-App mit zwei Gesichtern: Auf der Startseite läuft die **Kresh-Journey**, eine scrollbare
Geschichte mit eingebauten Mini-Spielen (ein persönliches Geschenk). Daneben steckt im selben Code der
**Adventskalender** von 2024 mit 24 Quiz-Türchen und Admin-Oberfläche. Er **ruht** zurzeit und ist nicht erreichbar.

<div class="hl-stats">
  <div class="hl-stat hl-stat--accent"><b>3</b><span>Dienste dauerhaft<br>web, app, database</span></div>
  <div class="hl-stat"><b>2</b><span>Dienste auf Abruf<br>migrate, backup</span></div>
  <div class="hl-stat"><b>4</b><span>Tabellen<br>Doctrine-Entities</span></div>
  <div class="hl-stat"><b>13</b><span>eigene Routen<br>davon 4 Spiel-APIs</span></div>
  <div class="hl-stat"><b>20</b><span>Folien der Journey<br>davon 9 Mini-Spiele</span></div>
  <div class="hl-stat"><b>24</b><span>Türchen<br>Adventskalender (ruht)</span></div>
  <div class="hl-stat hl-stat--warn"><b>3</b><span>Routen mit Fehler 500<br>/register, /devtest, /demo</span></div>
</div>

<div class="grid cards" markdown>

-   :material-gift-outline:{ .lg } **Für wen**

    ---

    Eine einzelne Beschenkte: Die Journey ist ein persönliches Geburtstagsgeschenk, der Kalender war ein
    Adventsgeschenk. Kein Massenpublikum, keine Konten für Besucher.

-   :material-gamepad-variant-outline:{ .lg } **Was es kann**

    ---

    **Journey:** 20 Folien zum Durchscrollen. 9 davon sind gesperrt, bis das Spiel gelöst ist (Terminal, Sauna,
    Kennzeichen, Kniffel, Quiz, Rubbellos …). **Kalender (ruht):** ein Türchen pro Dezembertag, Quizfrage,
    Punkte und Gewinnstufen.

-   :material-shield-lock-outline:{ .lg } **Wer was darf**

    ---

    Die Journey ist öffentlich, ohne Login. Nur `/admin` (EasyAdmin: Fragen, Antworten, Gewinnstufen) braucht ein
    Konto mit `ROLE_ADMIN`. Das Konto wird per Konsole angelegt, siehe [Betrieb](betrieb.md#konsole).

</div>

## Architektur

```mermaid
flowchart TB
    u(["Besucher<br/>Browser"]) -- "HTTPS" --> vps["VPS<br/>Caddy + TLS"]
    vps -- "WireGuard<br/>10.0.0.2:7999" --> web

    subgraph abyss["abyss · Komodo-Stack advent"]
        web["web<br/>Caddy 2.11"] -- "FastCGI" --> app["app<br/>PHP 8.5 · Symfony 8"]
        app --> db[("database<br/>MySQL 8.4")]
        mig["migrate<br/>einmalig je Deploy"] --> db
        bak["backup<br/>auf Abruf"] --> db
        bak --> dumps[("/srv/advent/backups")]
    end

    u -. "Bilder, GIFs, Videos" .-> cdn["Cloudinary · Tenor<br/>YouTube"]
    u -. "Styles" .-> tw["Tailwind-CDN"]
    app -. "Fehler (optional)" .-> sentry["Sentry"]

    classDef user fill:transparent,stroke:#0d9488,stroke-width:2px
    classDef app fill:#0d9488,stroke:#0f766e,color:#fff
    classDef data fill:#f59e0b,stroke:#b45309,color:#1b1c1e
    classDef ext stroke-dasharray:5 4
    class u user
    class web,app,mig,bak app
    class db,dumps data
    class vps,cdn,tw,sentry ext
```

*Der Besucher erreicht über den VPS und WireGuard den Caddy des Stacks. PHP spricht nur mit MySQL. Bilder und Videos
liegen nicht auf abyss: Der Browser lädt sie direkt von Cloudinary, Tenor und YouTube.*

- **Nach außen** gibt es nur einen Port: `web` lauscht auf `10.0.0.2:7999`, und nur der VPS kommt dorthin.
- **Gespeichert** wird nur in MySQL. Uploads gibt es keine, und die Journey merkt sich nichts auf dem Server: Wer
  neu lädt, fängt von vorne an.
- **Hintergrunddienste** und Mails gibt es keine. Der einzige zeitgesteuerte Job ist die tägliche Sicherung um
  01:30 (Komodo-Procedure `advent-backup`).

## Weiterlesen

| Seite | Inhalt |
|---|---|
| [Aufbau](aufbau.md) | Journey und Kalender als Ablauf, Datenmodell, Lebenszyklus eines Türchens |
| [Betrieb](betrieb.md) | Deploy, Rollback, Dienste, Variablen, Konsole, lokal entwickeln |
| [Daten](daten.md) | Volume, Sicherungen, Offsite, Wiederherstellung |
| [Probleme](probleme.md) | Symptom → Ursache → Abhilfe |

Die ausführliche Betriebsanleitung im Repo, mit allen Befehlen und dem Protokoll des Umzugs von SQLite auf MySQL:
[docs/deployment.md](https://github.com/rextuus/advent/blob/main/docs/deployment.md).
