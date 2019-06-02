<?php

namespace App\Http\Middleware;

use Closure;

class isExec
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
        $jwt = $request->jwt;
        $role = $jwt['role'];

        if ($role != 'exec') {
            return response()->json('Unauthorized', 401);
        }

        return $next($request);
    }
}
