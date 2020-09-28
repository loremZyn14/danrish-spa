<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'name'          => $faker->name,
        'description'   => $faker->word,
        'brand'         => $faker->word,
        'status'        => $faker->boolean,
        'price'         => $faker->randomNumber(3,true),
        'stocks'        => $faker->randomNumber(3,true)
    ];
});
