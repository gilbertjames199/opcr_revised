<?php

namespace App\Http\Controllers;

use App\Models\ProjectProfile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProjectProfileController extends Controller
{
    //
    protected $model;

    public function __construct(ProjectProfile $model)
    {
        $this->model=$model;
    }
    public function index(Request $request){
        return inertia('ProjectProfile/Index',[
                'can'=>[
                    'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
                ],
        ]);
    }
    public function create(Request $request){
        return inertia('ProjectProfile/Create',[
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
    ]);
    }
}
