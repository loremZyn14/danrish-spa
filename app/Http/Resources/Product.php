<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class Product extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [

            'name' => $this->name,
            'brand' => $this->brand,
            'price' => $this->price,
            'category' => $this->category->name,
            'stocks' => $this->stocks,
            'created_at' => $this->created_at
        ];
    }
}
