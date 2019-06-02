<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Application;
use App\User;
use Auth;

class HackerApplicationController extends Controller
{
    /**
     * Retreive the Hacker's application if it exists, else return null
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show()
    {
        $user = Auth::user();

        try {
            $application = $user->application;
        } catch(\Exception $e) {
            // return response('Unable to process request', 400);
            $application = null; // return null if user doesn't have an application
        }
        return response()->json([
            'Application' => $application
        ], 200);
    }

    /**
     * Create a new application, or update existing one
     * Should set submitted vs saved by itself??
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateOrCreate(Request $request)
    {
        // Get signed in user
        $user = Auth::user();

        // Create an application
        $application = Application::updateOrCreate(
            ['user_id' => $user->id],
            $request->input('Application')
        );

        // Set's user_id of application to the Hacker's id
        // $user->application()->save($application);

        return response()->json([
            'Application' => $application
        ], 200);
    }
}
