<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request)
    {


        $credential = Validator::make($request->all(),[
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);

        if($credential->fails()){
            return response()->json([
                'errors' => $credential->errors()
            ],200);
        }

        if(! Auth::attempt($credential->validated()) ){
            return response()->json([
                'message' => 'Unauthorized'
             ],401);
        }

        $tokenResult = $request->user()->createToken('Access Token');

        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'user' => $request->user(),
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
             )->toDateTimeString()
         ]);

    }

    public function register(Request $request)
    {
        $customer = $request->validate([
            'name' => 'required|string|max:10',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|min:8'

        ]);
        $customer =  User::create([
            'name' => $customer['name'],
            'email' => $customer['email'],
            'password' => Hash::make($customer['password'])
        ]);

        return response()->json($customer);
    }

    public function logout()
    {

    }
}
