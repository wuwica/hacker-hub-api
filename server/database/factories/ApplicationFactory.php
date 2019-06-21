<?php

use App\Application;
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

$factory->define(Application::class, function (Faker $faker) {
    return [
        'is_accepted' => 'no',
        'is_submitted' => false,
        'school' => $faker->randomElement(['UW', 'WLU', 'UofT']),
        'degree_type' => $faker->randomElement(['undergraduate', 'graduate', 'high school']),
        'fields_of_study' => "['CS']",
        'graduation_year' => $faker->year,
        'gender' => $faker->randomElement(['Female', 'Male', 'Other']),
        'ethnicity' => $faker->randomElement(['A', 'B', 'C', 'D']),
        'github_url' => $faker->url,
        'linkedin_url' => $faker->url,
        'personal_url' => $faker->url,
        'other_links' => $faker->url,
        'resume' => $faker->url,
        'question_1' => $faker->realText($maxNbChars = 200, $indexSize = 2),
        'question_2' => $faker->realText($maxNbChars = 200, $indexSize = 2),
        'question_3' => $faker->realText($maxNbChars = 200, $indexSize = 2),
    ];
});
