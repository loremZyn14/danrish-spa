<div {{ $attributes->merge(['class' => 'mt-5 pt-5']) }}  >
    <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
    @foreach ($products() as $product)
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            @if ($product->created_at->diffInDays(now()) < 15)
                <div class="ribbon-wrapper ribbon-lg">
                    <div class="ribbon bg-danger">
                        <strong>NEW</strong>
                    </div>
                </div>
            @endif

            <img src="{{ $product->productImages[0] ?? asset('assets/img/hero-bg.jpg')}}" class="img-fluid" alt="">
            <div class="portfolio-info">

                <h4>{{ $product->name }} <span class="badge badge-info p-2">$ {{ $product->price }} </span></h4>
                <p>{{ $product->brand }}</p>
                <a href="{{ $product->productImages[0] ?? asset('assets/img/hero-bg.jpg')}}" data-gall="portfolioGallery" class="venobox preview-link" title="{{ $product->name .' | '. $product->brand}}"><i class="bx bx-plus"></i></a>
                <a href="{{ route('product.details', $product) }}" class="details-link" data-toggle="tooltip" data-placement="top" title="More Details"><i class="bx bx-link"></i></a>
            </div>
        </div>
    @endforeach
</div>
</div>

