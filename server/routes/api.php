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

Route::post('register', 'AuthController@register');
/* Can access only when logged in */
Route::group(['middleware' => 'jwt.verify'], function () {
    /** Account stuff */
    Route::get('logout', 'AuthController@logout');
    Route::get('refresh', 'AuthController@refresh');
    Route::post('change-password', 'AuthController@changePassword');

    /** Users */
    Route::get('user', 'UserController@show');
    Route::patch('user', 'UserController@edit');

    /** Teams */
    Route::get('teams', 'TeamController@list');
    Route::get('team', 'TeamController@my_team');
    Route::post('team/join', 'TeamController@join');
    Route::post('team/leave', 'TeamController@leave');

    /** Applications */
    Route::group(['middleware' => 'isHacker'], function() {
        Route::get('hacker/application', 'HackerApplicationController@show');
        Route::post('hacker/application', 'HackerApplicationController@updateOrCreate');
    });
    Route::group(['middleware' => 'isExec'], function() {
        Route::get('exec/applications', 'ExecApplicationController@list');
        Route::patch('exec/application/{user_id}', 'ExecApplicationController@accept');
    });
    Route::group(['middleware' => 'isSponsor'], function() {
        Route::get('sponsor/applications', 'ExecApplicationController@sponsor_list');
    });
});
