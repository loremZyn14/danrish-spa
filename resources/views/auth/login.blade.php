@extends('layouts.auth')

@section('content')



<div class="container my-5 py-5 ">
    <div class="d-flex justify-content-center my-5 py-5 ">
        <div class="user_card">
            <div class="d-flex justify-content-center bg-danger align-items-center">
                <div class="brand_logo_container">
                    <img src="{{ asset('assets/img/logo.png')}}" class="brand_logo" alt="Logo">

                </div>
            </div>
            <div class="d-flex justify-content-center form_container">
                <form method="POST" action="{{ route('login') }}">
                    @csrf
                    <div class="input-group mb-3">
                        <div class="input-group-append">
                            <span class="input-group-text"><i class="fa fa-user"></i></span>
                        </div>
                        <input type="email" name="email" id="email" class="form-control input_email @error('email') is-invalid @enderror" value="{{ old('email') }}" placeholder="email" required autocomplete="email.." autofocus>

                        @error('email')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                    <div class="input-group mb-2">
                        <div class="input-group-append">
                            <span class="input-group-text"><i class="fa fa-key"></i></span>
                        </div>
                        <input type="password" id="password" name="password" class="form-control input_pass @error('password') is-invalid @enderror"  placeholder="password" required autocomplete="current-password">
                        @error('password')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                    <div class="form-group">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" name="remember" id="remember" class="custom-control-input" {{ old('remember') ? 'checked' : '' }}>

                            <label class="custom-control-label" for="remember">Remember me</label>
                        </div>
                    </div>
                        <div class="d-flex justify-content-center mt-3 login_container">
                 <button type="submit" name="button" class="btn btn-block btn-primary">Login</button>
               </div>
                </form>
            </div>

            <div class="mt-4">
                <div class="d-flex justify-content-center links">
                    Don't have an account? <a href="{{ url('/register') }}" class="ml-2">Sign Up</a>
                </div>
                <div class="d-flex justify-content-center links">
                    @if (Route::has('password.request'))
                        <a href="{{ route('password.request') }}">Forgot your password?</a>
                    @endif

                </div>
            </div>
        </div>
    </div>
</div>

@endsection
