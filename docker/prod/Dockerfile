# syntax=docker/dockerfile:1
# Advent – Produktions-Images (compose.prod.yaml). Die lokale Entwicklung nutzt weiter docker/php/Dockerfile.
#   prod: PHP-FPM mit Code, Abhängigkeiten und gebauten Assets (Dienste app, migrate)
#   web:  Caddy mit den öffentlichen Dateien aus prod (Dienst web)
FROM php:8.5.12-fpm-alpine AS base

RUN apk add --no-cache icu-libs icu-data-full libzip fcgi \
 && apk add --no-cache --virtual .build-deps $PHPIZE_DEPS icu-dev libzip-dev linux-headers \
 && docker-php-ext-install -j"$(nproc)" intl pdo_mysql zip \
 && pecl install apcu \
 && docker-php-ext-enable apcu \
 && apk del .build-deps

COPY --from=composer:2.9 /usr/bin/composer /usr/bin/composer
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
COPY docker/prod/php.ini $PHP_INI_DIR/conf.d/zz-app.ini
COPY docker/prod/php-fpm.conf /usr/local/etc/php-fpm.d/zz-app.conf

WORKDIR /srv/app
ENV APP_ENV=prod

# Abhängigkeiten in eigener Stufe: Ändert sich nur Code, bleibt diese Schicht im Cache.
# Bewusst MIT require-dev: src/DataFixtures/AppFixtures.php erbt von Doctrine\Bundle\FixturesBundle\Fixture und
# wird von app:update-door gebraucht – ohne das Paket bricht der Container-Build ab. Die Dev-Bundles (Profiler,
# Maker) sind in config/bundles.php nur für dev aktiv und laufen in prod nicht.
FROM base AS vendor
COPY composer.json composer.lock symfony.lock ./
RUN composer install --no-interaction --no-progress --no-scripts --no-autoloader

# Frontend (Webpack Encore). package.json verweist per file: auf Assets in vendor/symfony/ux-*.
FROM node:22.23.4-alpine AS assets
WORKDIR /srv/app
COPY package.json package-lock.json .npmrc ./
COPY --from=vendor /srv/app/vendor/symfony/ux-autocomplete/assets vendor/symfony/ux-autocomplete/assets
COPY --from=vendor /srv/app/vendor/symfony/ux-live-component/assets vendor/symfony/ux-live-component/assets
RUN npm ci --no-audit --no-fund
COPY webpack.config.js ./
COPY assets assets
RUN npm run build

FROM base AS prod
COPY --chown=www-data:www-data . .
COPY --from=vendor --chown=www-data:www-data /srv/app/vendor vendor
COPY --from=assets --chown=www-data:www-data /srv/app/public/build public/build
# .env ist nicht im Repo, Symfony braucht aber eine. Hier nur unkritische Vorgaben; alles Echte kommt zur Laufzeit
# als Umgebungsvariable aus compose.prod.yaml (die gewinnt immer). Die Werte nur für den Build stehen am RUN,
# landen also nicht im Image.
RUN printf '%s\n' 'APP_ENV=prod' 'SENTRY_DSN=' 'USER_PASSWORD=' 'DEFAULT_URI=http://localhost' 'TRUSTED_PROXIES=private_ranges' > .env \
 && composer dump-autoload --classmap-authoritative --no-interaction \
 && composer dump-env prod \
 && APP_SECRET=build-only DATABASE_URL='mysql://build:build@127.0.0.1:3306/build?serverVersion=8.4.11&charset=utf8mb4' \
    sh -c 'php bin/console assets:install public --no-interaction && php bin/console cache:warmup --no-interaction' \
 && chown -R www-data:www-data var public/bundles
USER www-data

FROM caddy:2.11.7-alpine AS web
COPY docker/prod/Caddyfile /etc/caddy/Caddyfile
COPY --from=prod /srv/app/public /srv/app/public
