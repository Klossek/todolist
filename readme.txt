

Install with Docker:

docker-compose build
cd laravel 
composer install
docker-compose up


Install locally:


Backend:

cd laravel

copy .env.example --> .env 

composer install

create database + database user 

php artisan migrate #create tables

php artisan serve
    

Frontend:

cd angular

npm install
ng serve --port=3000



