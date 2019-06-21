<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\QueryException;

use App\User;

class AuthController extends Controller
{
    /**
     * Register a new user, return than user instance along with a jwt
     *      TODO: validate the request
     *
     * @param Illuminate\Http\Request $request the request
     *
     * @return \Illuminate\Http\JsonResponse the response
     */
    public function register(Request $request)
    // public function register(UserRequest $request) // Validate request!!
    {
        try {
            // $data = self::validated($request);
            $user = User::create($request->all());
            $user->fill([
                'password' => Hash::make($request->get('password'))
            ])->save();
        } catch (QueryException $e) {
            // Either user with that email already exists, or a field is missing or...
            return response()->json($e->getMessage());
            return response()->json("Unable to create user.", 400);
        }

        // Send Confirm Account email
        // try {
        //     EmailRepo::confirmAccount($user->id);
        // } catch (Exception $e) {
        //     return response()->json('Failed to send email', 400);
        // }

        $credentials = [
            'email' => $request->get('email'),
            'password' => $request->get('password')
        ];

        $token = Auth::attempt($credentials);
        return response()->json([
            $user,
            $this->respondWithToken($token)
        ], 200);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @param Illuminate\Http\Request $request the request
     *
     * @return \Illuminate\Http\JsonResponse the response
     */
    public function login(Request $request)
    {
        $credentials = [
            'email' => $request->get('email'),
            'password' => $request->get('password')
        ];

        if (!$token = Auth::attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        // return response()->json('Login successful');
        return $this->respondWithToken($token);
    }

    /**
     * Confirm account
     */
    public function confirm(Request $request)
    {
        try {
            $user = Auth::user();
            $user->confirmed = true;
            $user->save();
        } catch (Exception $e) {
            return response()->json('Error confirming account', 400);
        }
        return response()->json('Successfully confirmed account', 200);
    }

    /**
     * Change password while logged in
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function changePassword(Request $request)
    {
        try {
            $user = Auth::user();
            $newPassword = $request->get('password');
            $user->password = Hash::make($newPassword);
            $user->save();
            return response($user->password);
        } catch (Exception $e) {
            return response()->json('Failed to change password', 400);
        }

        return response()->json('Successfully changed password', 200);
    }


    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
