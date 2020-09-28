@extends('layouts.base')

@section('content')<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Product Details</h1>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}">Home</a></li>
            <li class="breadcrumb-item "><a href="{{ route('products.index') }}">Products</a></li>
            <li class="breadcrumb-item active">{{$product->id}}</li>

          </ol>
        </div>
      </div>
    </div><!-- /.container-fluid -->
  </section>

  <!-- Main content -->
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
              <div class="card-header ">
                  <h3 class="d-flex justify-content-between">{{$product->name}} <button class="btn " data-toggle="modal" data-target="#editProduct" ><i class="fa fa-edit text-success"></i></button></h3>
              </div>
              <div class="card-body">
                    <div class="row">
                      <div class="col-lg-6 ">
                        <ul class="list-group-flush p-0 text-dark ">
                          <li class="list-group-item d-flex justify-content-between"><strong>Brand  </strong> {{$product->brand}}</li>
                          <li class="list-group-item d-flex justify-content-between"><strong>Price  </strong> {{ '$' . $product->price }}</li>
                          <li class="list-group-item d-flex justify-content-between"><strong>Stocks  </strong> {{ $product->stocks . ' pcs'}}</li>
                          <li class="list-group-item d-flex justify-content-between"><strong>Status  </strong> <span class="badge badge-{{$product->status ? 'success' : 'danger'}}">{{ $product->status ? '' : 'not ' }}available</span> </li>
                          <li class="list-group-item "><strong>Description  </strong></li>
                          <li class="list-group-item text-justify">{{$product->description}}</li>
                        </ul>
                      </div>
                      <div class="col-lg-4 px-auto">

                        <div class="container">
                            <h5>Images:</h5>
                            @if (!empty($product->images))
                                <div id="productImage" class="carousel slide " data-ride="carousel">
                                <ol class="carousel-indicators">
                                    @foreach ($product->images as $key => $image)

                                        <li data-target="#productImage" data-slide-to={{$key}} {{ $loop->first ? 'class="active"' : ''}} ></li>
                                    @endforeach
                                </ol>

                                <div class="carousel-inner">
                                    @foreach ($product->images as $key => $image)
                                        <div class="carousel-item {{ $loop->first ? 'active' : ''}}" >
                                            <img class="d-block w-100" src="{{asset($image)}}" >
                                        </div>
                                    @endforeach
                                </div>
                                <a class="carousel-control-prev" href="#productImage" role="button" data-slide="prev">
                                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                  <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#productImage" role="button" data-slide="next">
                                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span class="sr-only">Next</span>
                                </a>
                              </div>
                              <div class="container mt-2 text-right">
                                  <a href="#" class="btn btn-info">Modify Image(s)</a>
                              </div>
                            @else
                              <h5>This product has no image(s)</h5>
                            @endif


                        </div>
                      </div>
                    </div>
              </div>
              <div class="card-footer">
                  <a href="{{ route('products.index') }}" class="btn "><i class="fa fa-chevron-left"></i> Back</a>
              </div>
          </div>
      </div>
  </div>
</section>
<div class="modal fade" id="editProduct">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modify Product</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form role="form" action="{{ route('products.update', $product) }}" method="POST" enctype="multipart/form-data">
          @csrf
          @method('PUT')
          <div class="modal-body">
              <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" class="form-control" name="name" id="name" value="{{ $product->name}}">
              </div>
              <div class="form-group">
                  <label for="brand">Brand</label>
                  <input type="text" class="form-control" name="brand" id="brand" value="{{ $product->brand }}">
              </div>
              <div class="form-group">
                  <label for="price">Price</label>
                  <input type="number" class="form-control" name="price" id="price" value="{{ $product->price }}">
              </div>
              <div class="form-group">
                  <label for="quantity">Add Stocks</label>
                  <input type="number" class="form-control" name="quantity" id="quantity" value="0">
              </div>
              <div class="form-group">
                <div class="form-group">
                    <label>Update Status</label>
                    <select class="form-control" name="status">
                      <option value="1" {{$product->status ? 'selected':''}} >available</option>
                      <option value="0" {{$product->status ? '':'selected'}}>not available</option>
                    </select>
                  </div>
            </div>
              <div class="form-group">
                  <label for="description">Description</label>
                  <textarea class="form-control" name="description" id="description" cols="30" rows="5">{{ $product->description}}</textarea>
              </div>

          </div>
          <div class="modal-footer justify-content-between">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Update</button>
          </div>
      </form>
    </div>
  </div>
</div>



@endsection
