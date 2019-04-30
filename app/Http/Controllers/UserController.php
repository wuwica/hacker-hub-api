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

    // Get list of ALL users
    public function all()
    {
        try {
            $users = User::all();
        }
        catch(\Exception $e) {
            return response('Unable to process request.', 400);
        }

        return response()->json($users, 200);
    }

    // Register a new user
    public function register(CreateUser $request)
    {
        try {
            // $data = self::validated($request);
            $user = User::create($request->all());
            $user->fill([
                'password' => Hash::make($request->get('password'))
            ])->save();
        } catch (Exception $e) {
            return response()->json('Failed to create user.', 400);
        }

        // Do we want to return the new user or all the users?
        try {
            EmailRepo::confirmAccount($user->id);
        } catch (Exception $e) {
            return response()->json('Failed to send email', 400);
        }

        // Send the 'Confirm email' email
        return response()->json([
            "New user" => $user
        ], 200);
    }

    // Update user
    // NOT TESTED!!!!
    public function edit(Request $request)
    {
        $jwt = $request->jwt;
        $user = Auth::user();

        // User can only update themselves
        if ($jwt['id'] == $id) {
            $user = User::update($request->all());

            return response()->json([
                "User successfully updated. Updated User:" => $user
            ], 200);
        }
    }

    // Delete a user by ID
    public function destroy($id)
    {
        $jwt = $request->jwt;

        if ($jwt['id'] == $id) {
            User::destroy($id);
            return response()->json([
                "users" => User::all()
            ], 200);
        }
    }
}
