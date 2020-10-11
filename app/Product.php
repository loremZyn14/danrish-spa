<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
// use Laravel\Scout\Searchable;

class Product extends Model
{
    // use Searchable;
    protected $guarded =[];

    protected $casts = [
        'images' => 'array'
    ];



    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function cart()
    {
        return $this->belongsTo(Cart::class);
    }

    public function images()
    {
        return $this->morphMany(Image::class,'imageable');
    }
}
