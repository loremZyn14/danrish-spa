<?php

namespace App\Http\Controllers\Admin;

use App\Category;
use App\Http\Controllers\Controller;
use App\Product;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function request()
    {
        return response()->json(['msg' => 'ok']);
    }

    public function products(Request $request)
    {
        $products = Product::all();
        return response()->json($products);
    }

    public function productShow(Product $product)
    {
        return response()->json($product);
    }
    public function categories()
    {
        $categories = Category::all();

        return response()->json($categories);
    }
}
