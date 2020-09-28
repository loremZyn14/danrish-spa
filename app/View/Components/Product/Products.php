<?php

namespace App\View\Components\Product;

use Illuminate\View\Component;


class Products extends Component
{

    private $products;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($products)
    {
       $this->products = $products;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.product.products');
    }

    public function products()
    {
        return $this->products;
    }
}
