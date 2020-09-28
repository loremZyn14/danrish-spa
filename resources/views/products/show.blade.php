@extends('layouts.app')

@section('content')
    <!-- ======= Breadcrumbs Section ======= -->
    <section class="breadcrumbs">
        <div class="container">

          <div class="d-flex justify-content-between align-items-center">
            <h2>Product Details</h2>
            <ol>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Product</a></li>
              <li>Product Details</li>
            </ol>
          </div>

        </div>
      </section><!-- Breadcrumbs Section -->
      <!-- ======= Portfolio Details Section ======= -->
    <section class="portfolio-details">
        <div class="container">

          <div class="portfolio-details-container">

            <div class="owl-carousel portfolio-details-carousel">
                @if (!empty($product->productImages))
                    @foreach ($product->productImages as $key => $image)
                        <img src="{{ asset($image)}}" class="img-fluid" alt="">
                    @endforeach
                @else
                <img src="{{ asset('assets/img/hero-bg.jpg')}}" class="img-fluid" alt="">
                @endif
            </div>

            <div class="portfolio-info">
              <h3>Product information</h3>
              <ul>
                <li class="d-flex justify-content-between"><strong>Name :</strong> {{ $product->name}}</li>
                <li class="d-flex justify-content-between"><strong>Brand :</strong> {{ $product->brand}}</li>
                <li class="d-flex justify-content-between"><strong>Price :</strong> P {{ $product->price}}.00 </li>
                <li class="d-flex justify-content-between"><strong>Stocks :</strong> {{ $product->stocks}}pcs</li>
                <li class="d-flex justify-content-between"><strong>Status :</strong> Available</li>
              </ul>
              <button class="btn btn-warning btn-block text-dark" data-toggle="modal" data-target="#orderForm"><strong>Order Now!</strong></button>


            </div>

          </div>

          <div class="portfolio-description">
            <h2>Description :</h2>
            <p>{{ $product->description}}</p>
          </div>


        </div>
      </section><!-- End Portfolio Details Section -->
      <div class="modal fade" id="orderForm">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    Order Form
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <order-form />
                </div>
            </div>
        </div>
      </div>
@endsection
