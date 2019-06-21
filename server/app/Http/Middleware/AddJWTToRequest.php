<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use JWTAuth;
use Tymon\JWTAuth\JWT;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;

class AddJWTToRequest extends BaseMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
        } catch (Exception $e) {
            if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException){
                return response()->json(['status' => 'Token is Invalid']);
            } else if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException){
                return response()->json(['status' => 'Token is Expired']);
            } else if ($e instanceof \Tymon\JWTAuth\Exceptions\JWTException) {
                return response()->json(['status' => 'Token could not be parsed from the request']);
            }
            else{
                return response()->json(['status' => 'Authorization Token not found']);
            }
        }
        $request->request->add([
            "user" => $user,
            "jwt" => JWTAuth::parseToken()->getClaim('user')
        ]);

        return $next($request);
    }
}
