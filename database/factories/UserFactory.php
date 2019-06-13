<?php

use App\User;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'email' => $faker->unique()->safeEmail,
        // 'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'account_confirmed' => false,
        'role' => 'hacker',
        'is_applied' => false,
        'confirmed_attending' => false,
        'phone_number' => $faker->phoneNumber,
        'dietary_restrictions' => "[]",
        'shirt_size' => $faker->randomElement(['S', 'M', 'L', 'XL']),
        'pronoun' => $faker->randomElement(['she/her', 'he/him', 'they/them']),
        'dob' => $faker->dateTimeBetween($startDate = '-25 years', $endDate = '-10 years', $timezone = 'UTC'),
        'team' => null,
        'remember_token' => Str::random(10),
    ];
});
