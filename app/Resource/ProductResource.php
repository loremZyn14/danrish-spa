<?php
namespace App\Resource;

use App\Category;
use App\Product;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Str;

class ProductResource {
    // Get all products
    public function products()
    {
        return Product::with('category','images')->latest()->get();
    }
    // Get one product
    public function product($id)
    {
        return Product::findOrFail($id);
    }

    public function addProduct($id,$data,$image)
    {
        $category = Category::findOrFail($id);
        $product = $category->products()->create($data);
        $this->storeImage($image,$product);


    }

    public function deleteProduct($id)
    {
        Product::findOrFail($id)->delete();
    }

    public function deleteImages(array $paths)
    {
        File::delete($paths);
    }

    public function storeImage($image, $product)
    {

        if (!is_dir(public_path('/assets/img/products'))) {

            mkdir(public_path('/assets/img/products'), 0777);
        }

        $basename = Str::random();
        $original = $basename . '.' . $image->getClientOriginalExtension();

        Image::make($image)->fit(300, 300)->save(public_path('/assets/img/products/' . $original));


        if ($product->image == null) {
            return $product->images()->create([
                'image_url' => '/assets/img/products/' . $original
            ]);
        }
        $this->deleteImage($product->image);
        return $product->images()->update([
            'image_url' => '/assets/img/products/' . $original
        ]);
    }
    public function deleteImage($image)
    {

        File::delete(public_path($image->path));
    }


}
