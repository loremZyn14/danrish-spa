<?php

namespace App\Http\Controllers;

use App\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function store(Request $request )
    {
        Cart::create([
            'user_id' => 1,
            'product_id' => $request->id,
            'qty' => $request->qty,
            'total' => $request->total
        ]);

        return response()->json('ok');
    }
}
