@extends('layouts.base')

@section('content')

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Category List</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Categories</li>
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
                    <h3 class="d-flex justify-content-between">Categories <button class="btn btn-primary" data-toggle="modal" data-target="#addCategory" > Add Category <i class="fa fa-plus-circle" aria-hidden="true"></i></button></h3>
                </div>
                <div class="card-body">
                    <table id="categories-table" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th class="no-sort" >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($categories as $category)
                                <tr>
                                    <td>{{ $category->id }}</td>
                                    <td >{{$category->name}}</td>
                                    <td >
                                        <button class="btn editCatBtn" data-category-id={{ $category->id }} ><i class="fas fa-edit text-success"  data-toggle="tooltip" data-placement="top" title="Edit"></i></button>
                                        <button class="btn delCatBtn" data-category-id={{ $category->id }} data-toggle="modal" data-target="#deleteCategory"><i class="fas fa-trash text-danger"  data-toggle="tooltip" data-placement="top" title="Delete"></i></button>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                        <tfoot>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="modal fade" id="addCategory">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Create Category</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form action="{{ route('categories.store') }}" method="post" >
            @csrf
            <div class="modal-body">
                <div class="form-group">
                    <label for="category">Name</label>
                    <input type="text" class="form-control" name="name" id="name" placeholder="Enter category name..">
                    @error('name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>

            </div>
            <div class="modal-footer justify-content-between">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Create</button>
            </div>
        </form>
      </div>
    </div>
</div>
<div class="modal fade" id="editCategory">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Modify Category</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form role="form" action="{{ route('categories.update') }}" method="POST" >
            @csrf
            @method('PUT')
            <div class="modal-body">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" name="name" id="name" value="{{ $category->name ?? ''}}">
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
<div class="modal fade" id="deleteCategory">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Delete Category</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form method="post" id="categoryFormDelete">

            <div class="modal-body">
                @csrf
                <input type="hidden" name="category_id" id="category_id"/>
                <p>Are you sure want delete this category?</p>
            </div>
            <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-danger">Delete</button>
            </div>
        </form>
      </div>
    </div>
  </div>
@endsection
