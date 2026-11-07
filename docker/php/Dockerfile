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
RUN composer install --optimize-autoloader --no-interaction \
    && mkdir -p var/cache var/log \
    && chown -R www-data:www-data var
