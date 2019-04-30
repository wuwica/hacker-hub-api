<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', 'AuthController@login');

Route::post('register', 'UserController@register');

// can access only when logged in
Route::group(['middleware' => 'jwt.verify'], function () {
    /** Account stuff */
        Route::post('logout', 'AuthController@logout');
        Route::post('refresh', 'AuthController@refresh');
        Route::post('me', 'AuthController@me');
        Route::post('change-password', 'AuthController@changePassword');

        /** Users */
        Route::get('user/{id}', 'UserController@show');
        Route::get('users', 'UserController@all')->middleware('isStaff');
        // Route::post('user', 'UserController@create');
        Route::patch('user', 'UserController@edit');
        // Route::delete('user/{id}', 'UserController@destroy')->middleware('isExec');

        /** Teams */
        Route::get('teams', 'TeamController@list');
        Route::get('team', 'TeamController@my_team');
        Route::post('team/join', 'TeamController@join');
        Route::get('team/leave', 'TeamController@leave');

        /** Applications */
        Route::group(['middleware' => 'isExec'],
            function() {
                Route::get('applications', 'ApplyController@list');
                Route::get('application/{app_id}', 'ApplyController@show');
                Route::post('application/{app_id}', 'ApplyController@update');
        });
});
