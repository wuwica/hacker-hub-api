<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Repositories\EmailRepo;
use App\Http\Requests\CreateUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Retrieve the authenticated User model.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show()
    {
        try {
            $user = auth()->user();
        }

        catch(\Exception $e) {
            return response()->json("Unable to retrieve user.", 400);
        }
        return response()->json($user, 200);
    }

    /**
     * Update the logged in User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit(Request $request)
    {
        $loggedInUser = Auth::user();

        $user = User::where('id', $loggedInUser->id)->first()->update($request->all());
        $user = User::where('id', $loggedInUser->id)->first();

        return response()->json($user, 200);
    }
}
