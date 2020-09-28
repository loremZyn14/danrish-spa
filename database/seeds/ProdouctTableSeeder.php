<?php

use App\Product;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class ProdouctTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $categories = factory(App\Category::class,10)->create();

        foreach($categories as $category){

            $category->products()->create(
                [
                    'name'          => 'asd',
                    'description'   => 'word',
                    'brand'         =>' $faker->word,',
                    'price'         => 100,
                    'stocks'        => 100
                ]
            );
        }

    }
}
