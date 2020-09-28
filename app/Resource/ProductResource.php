<?php
namespace App\Resource;

use App\Category;
use App\Product;
use Illuminate\Support\Facades\File;

class ProductResource {
    // Get all products
    public function products()
    {
        return Product::with('category')->latest()->get();
    }
    // Get one product
    public function product($id)
    {
        return Product::findOrFail($id);
    }

    public function addProduct($id,$data)
    {
        $category = Category::findOrFail($id);

        $category->products()->create($data);

    }

    public function deleteProduct($id)
    {
        Product::findOrFail($id)->delete();
    }

    public function deleteImages(array $paths)
    {
        File::delete($paths);
    }


}
