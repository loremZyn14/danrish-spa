<?php

use App\Product;
use Mock\ProductMock;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;


class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        // $categories = factory(App\Category::class,10)->create();

        foreach(ProductMock::products() as $product){

            Product::create($product);
        }

    }
}
