@extends('layouts.app')

@section('content')
    <!-- ======= Breadcrumbs Section ======= -->
    <section class="breadcrumbs">
        <div class="container">

          <div class="d-flex justify-content-between align-items-center">
            <h2>Services List</h2>
            <ol>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>

            </ol>
          </div>

        </div>
      </section><!-- Breadcrumbs Section -->
      <!-- ======= Services Section ======= -->
    <section id="services">
        <div class="container" data-aos="fade-up">
          <div class="section-header">
            <h3 class="section-title">Services</h3>
            <p class="section-description">We provide a service that is fit to our customer needs and affordable.</p>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6" data-aos="zoom-in">
              <div class="box">
                <div class="icon"><a href=""><i class="fa fa-desktop"></i></a></div>
                <h4 class="title"><a href="">Software and Hardware</a></h4>
                <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6" data-aos="zoom-in">
              <div class="box">
                <div class="icon"><a href=""><i class="fa fa-leanpub" aria-hidden="true"></i></a></div>
                <h4 class="title"><a href="">Tutorials and Trainings</a></h4>
                <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata <span><a href="#">See Details</a></span></p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6" data-aos="zoom-in">
              <div class="box">
                <div class="icon"><a href=""><i class="fa fa-video-camera" aria-hidden="true"></i></a></div>
                <h4 class="title"><a href="">CCTV Installation</a></h4>
                <p class="description">asdasd <span><a href="#">See Details</a></span></p>

            </div>
            </div>

            <div class="col-lg-4 col-md-6" data-aos="zoom-in">
              <div class="box">
                <div class="icon"><a href=""><i class="fa fa-podcast" aria-hidden="true"></i></a></div>
                <h4 class="title"><a href="">Network Installation</a></h4>
                <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6" data-aos="zoom-in">
              <div class="box">
                <div class="icon"><a href=""><i class="fa fa-code" aria-hidden="true"></i></a></div>
                <h4 class="title"><a href="">Web Development</a></h4>
                <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6" data-aos="zoom-in">
              <div class="box">
                <div class="icon"><a href=""><i class="fa fa-sun-o"></i></a></div>
                <h4 class="title"><a href="">Solar Installation</a></h4>
                <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
              </div>
            </div>

          </div>

        </div>
      </section><!-- End Services Section -->


@endsection
