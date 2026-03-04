<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class HandleImpersonation
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        // Check if user is impersonating and share it with Inertia
        if (session('impersonate_original_user')) {
            \Inertia\Inertia::share([
                'flash' => [
                    'impersonating' => true,
                    'original_user_id' => session('impersonate_original_user'),
                ]
            ]);
        }

        return $next($request);
    }
}
