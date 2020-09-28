<?php


use Illuminate\Support\Facades\Route;


// Route::prefix('admin')->group(function(){
//     Auth::routes();
// });


Route::get('/{any}', 'AppController@app')->where('any','.*');


