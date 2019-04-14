<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    // Retrieve a user by ID
    public function show($id)
    {
        try {
            $user = User::where('id', $id)->firstOrFail();
        }

        catch(\Exception $e) {
            return response('User not found.', 404);
        }

        return response()->json($user, 200);

    }

    // Create or update
    public function create(Request $request)
    {
        // add request validation (ie make DOB a carbon object)
        User::updateOrCreate($request->all());
        return response()->json([
            "users" => User::all()
        ], 200);
    }

    // Delete a user by ID
    public function destroy($id)
    {
        User::destroy($id);
        return response()->json([
            "users" => User::all()
        ], 200);
    }
}
