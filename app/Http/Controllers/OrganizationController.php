<?php

namespace App\Http\Controllers;

use App\Models\AccountAccess;
use App\Models\OrganizationalGoal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class OrganizationController extends Controller
{
    protected $model;
    public function __construct(OrganizationalGoal $model)
    {
       $this->model = $model;
    }


    //
    public function index(Request $request){
        $idn = auth()->user()->recid;
        $data = $this->model
                ->orderBy('created_at', 'desc')
                ->Join(DB::raw('fms.accountaccess acc'),'acc.FFUNCCOD','=','organizational_goals.FFUNCCOD')
                ->Join(DB::raw('fms.systemusers sysu'),'sysu.recid','=','acc.iduser')
                ->where('sysu.recid',$idn)
                ->paginate(10)
                ->withQueryString();
        return inertia('Organizational/Index',[
            "data"=>$data,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);

    }

    public function create(Request $request){
        $functions = AccountAccess::where('iduser',auth()->user()->recid)
                    ->Join(DB::Raw('fms.functions ff'),'ff.FFUNCCOD','accountaccess.ffunccod')
                    ->with('func')->get();
       // dd($accounts);
        //$functions = $accounts->pluck('func');
        return inertia('Organizational/addOrganizational',[
            'functions'=>$functions,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function store(Request $request){

        $attributes = $request->validate([
            'goal_description' => 'required',
            'FFUNCCOD'=>'required'
        ]);
        //dd($attributes);
        $this->model->create($attributes);
        return redirect('/Organization')
                ->with('message','Organizational Goal added');
    }

    public function edit(Request $request, $id){
        $data = $this->model->where('id', $id)->first([
            'id',
            'goal_description',
            'FFUNCCOD'
        ]);
        $accounts = AccountAccess::where('iduser',auth()->user()->recid)->with('func')->get();
        $functions = $accounts->pluck('func');
        return inertia('Organizational/addOrganizational', [
            "editData" => $data,
            "functions"=>$functions,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function update(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);
        $data->update([
            'goal_description'=>$request->goal_description
        ]);

        return redirect('/Organization')
                ->with('message','Organizational Goal updated');
    }

    public function destroy(Request $request){
        $data = $this->model->findOrFail($request->id);
        $data->delete();
        //dd($request->raao_id);
        return redirect('/Organization')->with('warning', 'Organizational Goal Deleted');

    }
}
