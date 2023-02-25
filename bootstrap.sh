#!/usr/bin/env sh

composer install
npm install

touch database/database.sqlite
cp .env.example .env

php artisan key:generate

echo "Done :))"
