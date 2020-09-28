<?php

use Illuminate\Database\Seeder;

class CategoryTableSeeder extends Seeder
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
            $productId = factory(App\Product::class)->create()->pluck('id');
            $category->products()->attach($productId);
        }
    }
}
