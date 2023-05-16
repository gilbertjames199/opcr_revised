<?php

namespace App\Http\Controllers;

use App\Models\Implementing_team;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ImplementingTeamController extends Controller
{
    //
    public function __construct(Implementing_team $model)
    {
       $this->model = $model;
    }

        //
        public function index(Request $request){

            $data = $this->model
                        ->orderBy('created_at', 'desc')
                        ->paginate(10)
                        ->withQueryString();
            return inertia('ImplementingTeam/Index',[
                "data"=>$data,
                'can'=>[
                    'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
                ],
            ]);

        }

        public function create(Request $request){
            //dd('create');
        return inertia('ImplementingTeam/Create',[
        'can'=>[
            'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
            'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
        ],
    ]);
        }

        public function store(Request $request){
            // dd($request);
            $attributes = $request->validate([
                'name' => 'required',
                'position' => 'required',
                'competency' => 'required',
                'role' => 'required',
            ]);
            //dd($attributes);
            $this->model->create($attributes);
            return redirect('/ImplementingTeam')
                    ->with('message','Implementing Team added');
        }

        public function edit(Request $request, $id){
            $data = $this->model->where('id', $id)->first([
                'id',
                'name',
                'position',
                'competency',
                'role',
            ]);

            return inertia('ImplementingTeam/Create', [
                "editData" => $data,
                'can'=>[
                    'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
                ],
            ]);
        }

        public function update(Request $request)
        {
            // dd('update');
            $data = $this->model->findOrFail($request->id);
            //dd($request->plan_period);
            $data->update([
                'name'=>$request->name,
                'position'=>$request->position,
                'competency'=>$request->competency,
                'role'=>$request->role,
            ]);

            return redirect('/ImplementingTeam')
                    ->with('message','Implementing Team updated');
        }

        public function destroy(Request $request){
            $data = $this->model->findOrFail($request->id);
            $data->delete();
            //dd($request->raao_id);
            return redirect('/ImplementingTeam')->with('warning', 'Implementing Team Deleted');

        }

}
