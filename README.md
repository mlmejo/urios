## Install PHP dependencies

```
composer install
```

## Install Node dependencies

```
npm install
```

## Generate application secret key

```
php artisan key:generate
```

## Next
1. Modify DB_ .env variables to match your database
2. `php artisan migrate`
3. Now run `php artisan serve` and `npm run dev` in separate terminals
4. Open `localhost:8000` in browser
