<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Application;

class ExecApplicationController extends Controller
{
    /**
     * Return a list of all the applications
     * Hide any identifiers, replace with silly things
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function list()
    {
        try {
            // Only show submitted applications
            // Redact first/last name, gender, ethnicity... replace with GOT names or something
            $applications = Application::all();
        }
        catch(\Exception $e) {
            return response('Unable to process request.', 400);
        }

        return response()->json([
            'Applications' => $applications
        ], 200);
    }

    /**
     * Update the application's status to either accepted, rejected or maybe
     *
     * @param Integer $user_id the user's id
     * @param Illuminate\Http\Request $request the request instance
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function accept($user_id, Request $request)
    {
        try {
            $application = Application::where('user_id', $user_id)->firstOrFail();
        } catch (\Exception $e) {
            return response('Application belonging to user with id ' . $user_id . ' does not exist', 400);
        }

        $new_status = $request->input('status');
        $application->is_accepted = $new_status;
        $application->save();

        return response()->json([
            'Application' => $application
        ], 200);
    }

    /**
     * Sponsors can view all accepted applications
     * Amount of information they get is based on their tier
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function sponsor_list()
    {

    }
}
