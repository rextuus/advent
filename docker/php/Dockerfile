FROM php:8.5-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libicu-dev \
    libzip-dev \
    zip \
    unzip \
    libpq-dev \
    libsqlite3-dev \
    && docker-php-ext-install \
    intl \
    pdo_mysql \
    pdo_pgsql \
    pdo_sqlite \
    zip

# Set working directory
WORKDIR /var/www/html

# Install composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Anwendungscode ins Image kopieren (in compose.prod.yaml gibt es anders als in compose.yaml
# keinen Bind-Mount für den Code, nur fuer var/ – ohne COPY waere der Container leer)
COPY . .

# Abhaengigkeiten installieren (APP_ENV=prod, sonst versuchen die Composer-Scripts
# das dev-only MakerBundle zu laden). Kein --no-dev: src/DataFixtures/AppFixtures.php
# erbt von Doctrine\Bundle\FixturesBundle\Fixture (require-dev) und wird immer geladen,
# da src/ nicht nach dev/prod getrennt ist – ohne das Paket schlaegt cache:clear fehl.
ENV APP_ENV=prod
# .env ist git-ignoriert (steht nicht im Repo) – auf dem Server fehlt die Datei nach git clone
# komplett. SymfonyRuntime braucht sie trotzdem (auch zur Laufzeit, nicht nur beim Bauen), sonst
# "Unable to read the .env environment file" – eine leere Datei reicht, da echte Werte ohnehin
# aus .env.prod.local (docker compose --env-file) als echte Umgebungsvariablen kommen und
# .env-Werte immer überschreiben. Das Post-Install-Skript "cache:clear" bootet beim Bauen
# zusätzlich den vollen Kernel und braucht dafür bereits echte Werte wie DATABASE_URL/SENTRY_DSN,
# die zu diesem Zeitpunkt noch nicht existieren – daher --no-scripts: Composer installiert nur
# die Pakete, der Cache wird beim ersten Request bzw. über "make prod-console CMD=cache:warmup" aufgebaut.
# DATABASE_URL (unkritischer Default, Pfad liegt eh fest auf var/data.db) und SENTRY_DSN
# (config/packages/sentry.yaml nutzt env(SENTRY_DSN) ohne Fallback) werden hier aus demselben
# Grund wie oben hinterlegt: Lässt man sie in .env.prod.local weg – SENTRY_DSN ist dort bewusst
# optional, DATABASE_URL steht dort gar nicht erst drin –, bricht sonst jeder Befehl (auch
# cache:warmup) mit "Environment variable not found" ab.
RUN printf 'DATABASE_URL="sqlite:///%%kernel.project_dir%%/var/data.db"\nSENTRY_DSN=\n' > .env \
    && composer install --optimize-autoloader --no-interaction --no-scripts \
    && mkdir -p var/cache var/log \
    && chown -R www-data:www-data var
