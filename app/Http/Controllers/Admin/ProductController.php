<?php

namespace App\Http\Controllers\Admin;

use App\Category;
use App\Http\Controllers\Controller;
use App\Product;
use App\Resource\ProductResource;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class ProductController extends Controller
{
    public $productResource;

    public function __construct(ProductResource $productResource)
    {
        $this->productResource = $productResource;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::all();
        return view('admin.pages.products.index')->with([
            'products' => $this->productResource->products(),
            'categories'    => $categories
        ]);


    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $data = $request->validate([
            'name'          => 'required',
            'brand'         => 'required',
            'price'         => 'integer',
            'stocks'        => 'integer',
            'description'   => 'required|max:255',
        ]);

        if($request->hasFile('images')){

            if(! is_dir(public_path('/images'))){
                mkdir(public_path('/images',0777));
            }
            $images = Collection::wrap($request->file('images'));

            $productImages = $images->map(function($image){
                $basename = Str::random();
                $fileName = $basename . '.' .$image->getClientOriginalExtension();
                Image::make($image)->fit(800,600)->save(public_path('/images/'.$fileName));
                return '/images/' . $fileName;
            })->toArray();

            $data = array_merge($data,['images' => $productImages]);

        }


        $this->productResource->addProduct($request->category,$data);

        return back()->with('success','Product added successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return view('admin.pages.products.show',compact('product'));
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request

     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $product->update([
            'name'          => $request->name,
            'brand'         => $request->brand,
            'price'         => $request->price,
            'stocks'        => $request->quantity + $product->stocks,
            'status'        => $request->status,
            'description'   => $request->description
        ]);

        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request )
    {
        $imagesPath = Product::findOrFail($request->product_id)->images;

        $this->deleteImages($imagesPath);

        $this->productResource->deleteProduct($request->product_id);

        return back()->with('success' , 'Product successfully deleted');
    }

    public function deleteImages(array $path = [])
    {
        File::delete($path);
    }
}
