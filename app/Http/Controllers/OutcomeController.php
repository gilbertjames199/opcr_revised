<?php

namespace App\Http\Controllers;

use App\Models\ChiefAgenda;
use App\Models\EconomicAgenda;
use App\Models\ELA;
use App\Models\OrganizationalGoal;
use App\Models\Outcome;
use App\Models\ResearchAgenda;
use App\Models\SDG;
use App\Models\Sectoral;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OutcomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct(Outcome $model)
    {
        //$this->middleware(['auth','verified']);
        $this->model = $model;
    }
    public function index(Request $request)
    {

        //dd($org_goals->pluck("goal_description"));
        $data = $this->model
                ->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString();

        return inertia('Outcome/Index',[
            "data"=>$data,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function create(Request $request)
    {
        $org_goals=OrganizationalGoal::get();
        $sec_goals = Sectoral::get();
        $sdg_goals = SDG::get();
        $chief_agenda = ChiefAgenda::get();
        $econ_agenda = EconomicAgenda::get();
        $ela_agenda = ELA::get();
        $res_agenda = ResearchAgenda::get();
        return inertia('Outcome/Create',[
            'org_goals'=>$org_goals,
            'sec_goals'=>$sec_goals,
            'sdg_goals'=>$sdg_goals,
            'chief_agenda'=>$chief_agenda,
            'econ_agenda'=>$econ_agenda,
            'ela_agenda'=>$ela_agenda,
            'res_agenda'=>$res_agenda,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]

        );
    }

    public function store(Request $request)
    {
        //dd($request);
        $attributes = $request->validate([
            'plan_period' => 'required',
            'oc_desc' => 'required',
            'id_org_goals'=>'required',
            'id_sec_goals'=>'required',
            'id_sdg_goals'=>'required',
            'id_cea'=>'required',
            'id_sea'=>'required',
            'id_ela'=>'required',
            'id_rea'=>'required',
            'FFUNCCOD'=>'required',
        ]);
        //dd($attributes);
        $this->model->create($attributes);
        $request->pass='';
        return redirect('/outcome')
                ->with('message','Outcome added');
    }

    public function edit(Request $request, $id)
    {
        $org_goals=OrganizationalGoal::get();
        $sec_goals = Sectoral::get();
        $sdg_goals = SDG::get();
        $chief_agenda = ChiefAgenda::get();
        $econ_agenda = EconomicAgenda::get();
        $ela_agenda = ELA::get();
        $res_agenda = ResearchAgenda::get();
        $data = $this->model->where('id', $id)->first([
            'id',
            'plan_period',
            'oc_desc',
            'id_org_goals',
            'id_sec_goals',
            'id_sdg_goals',
            'id_cea',
            'id_sea',
            'id_ela',
            'id_rea',
            'FFUNCCOD',
        ]);

        return inertia('Outcome/Create', [
            "editData" => $data,
            'org_goals'=>$org_goals,
            'sec_goals'=>$sec_goals,
            'sdg_goals'=>$sdg_goals,
            'chief_agenda'=>$chief_agenda,
            'econ_agenda'=>$econ_agenda,
            'ela_agenda'=>$ela_agenda,
            'res_agenda'=>$res_agenda,
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
            'plan_period'=>$request->plan_period,
            'oc_desc'=>$request->oc_desc,
            'id_org_goals'=>$request->id_org_goals,
            'id_sec_goals'=>$request->id_sec_goals,
            'id_sdg_goals'=>$request->id_sdg_goals,
            'id_cea'=>$request->id_cea,
            'id_sea'=>$request->id_sea,
            'id_ela'=>$request->id_ela,
            'id_rea'=>$request->id_rea,
            'FFUNCCOD'=>$request->FFUNCCOD,
        ]);

        return redirect('/outcome')
                ->with('message','Outcome updated');
    }


    public function destroy(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        $data->delete();
        //dd($request->raao_id);
        return redirect('/outcome')->with('warning', 'Target deleted');
    }
}
