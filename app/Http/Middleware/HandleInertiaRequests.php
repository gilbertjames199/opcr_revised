<?php

namespace App\Http\Middleware;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    public function share(Request $request): array
    {
        if (auth()->check()) {
            $profile =  User::where('recid', auth()->user()->recid)->first();

            return array_merge(parent::share($request), [
                'auth' => auth()->user() ? [ //if there is a user
                    'user' => [
                         'FullName' => ucfirst(auth()->user()->FullName),
                         'UserName' =>auth()->user()->UserName,
                         'UserType' =>auth()->user()->UserType,
                    //     'level' =>auth()->user()->level,
                    //     'municipality' =>auth()->user()->municipality,
                    //     'barangay' =>auth()->user()->barangay,
                    //     'photo' => $profile ? $profile->getUrl() : ''
                    ]
                ] : null,
                'flash' => [
                    'message' => fn () => $request->session()->get('message'),
                    'error' => fn () => $request->session()->get('error'),
                ],
            ]);
        }

        return [];

    }
}
