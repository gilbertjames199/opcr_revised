<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Http\Request;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class DashBoardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    //$totalAll = $this->totalAll();



    public function index()
    {
        //dd('create: '.auth()->user()->can('create',User::class).'edit: '.auth()->user()->can('edit',User::class).'delete: '.auth()->user()->can('delete',User::class));

        return inertia('Home', [
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function manual()
    {
        return inertia('Manual/Index');
    }
    public function not_found()
    {
        return inertia('NotFound/Index');
    }
}
