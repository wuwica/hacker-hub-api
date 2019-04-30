# The GoldenHack API

## Pre-requisites

1. Follow the instructions to [install Laravel 5.8](https://laravel.com/docs/5.8)
2. Make sure that you have a local MySQL database configured

## Usage

```
git clone git@github.com:golden-hacks/hacker-api.git
cd hacker-api
git checkout -b <branch name>
```

Install dependencies:
```
composer install
```

Configure your environment
```
cp .env.example .env
php artisan generate:key
```
and fill in the database connection details:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```
Initialize the database by running:
```
php artisan migrate:fresh
```

To start a local server on `localhost:8000`, run:
```
php artisan serve
```


## Notes
- Laravel has a ton of tutorials and really great documentation!
Check out [Laracasts](https://laracasts.com/series/laravel-from-scratch-2018) and the [Laravel Documentation](https://laravel.com/docs/5.8) (or consult my good friend Stack Overflow!) if you ever get stuck

- I use [Postman](https://www.getpostman.com/) for testing API routes

- I'm using MySQL 5.7 (^8.0 won't work!) and Sequel Pro

## Changelog
- Apr 14: Created the User model and controller, added corresponding REST endpoints

## Minor TODOs bc I have a tendency to forget things:
- Add validation (ie store DOB as Carbon object)
- Do not store password in table!!!
- Figure out what other fields we want to save for Users

_Major To-dos in the Google Doc in the Technology folder_
