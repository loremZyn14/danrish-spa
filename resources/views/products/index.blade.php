@extends('layouts.app')

@section('content')
    <!-- ======= Breadcrumbs Section ======= -->
    <section class="breadcrumbs">
        <div class="container">

          <div class="d-flex justify-content-between align-items-center">
            <h2>Portfolio List</h2>
            <ol>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>

            </ol>
          </div>

        </div>
      </section><!-- Breadcrumbs Section -->
    <x-product.products :products="$products" id="portfolio" class="container"/>
@endsection
