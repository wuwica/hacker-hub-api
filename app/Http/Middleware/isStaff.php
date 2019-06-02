<?php

namespace App\Http\Middleware;

use Closure;

class isStaff
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

        if ($role == 'hacker') {
            return response()->json('Unauthorized', 401);
        }

        return $next($request);
    }
}
