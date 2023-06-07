<?php

namespace App\Http\Controllers;

use App\Models\OfficePerformanceCommitmentRatingList;
use App\Models\OpcrTarget;
use App\Models\ProgramAndProject;
use App\Models\SuccessIndicator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class OpcrTargetController extends Controller
{
    protected $model;
    public function __construct(OpcrTarget $model)
    {
        $this->model=$model;
    }
    public function index(Request $request, $opcr_list_id){
        //->where('OPT.office_performance_commitment_rating_list_id', $opcr_list_id)
        $opcr_list = OfficePerformanceCommitmentRatingList::where('id', $opcr_list_id)->first();
        $data = ProgramAndProject::where('FFUNCCOD', $opcr_list->FFUNCCOD)
                            ->select('program_and_projects.id AS idpaps',
                                    'program_and_projects.paps_desc',
                                    'OPT.id',
                                    'OPT.target_success_indicator',
                                    'OPT.quantity',
                                    'SU.success_indicator')
                            ->leftjoin('success_indicators AS SU', 'SU.idpaps', 'program_and_projects.id')
                            ->leftjoin(DB::raw('(Select id,
                                                        office_performance_commitment_rating_list_id,
                                                        idpaps, quantity, target_success_indicator
                             FROM opcr_targets WHERE opcr_targets.office_performance_commitment_rating_list_id='.$opcr_list_id.') AS OPT'), 'OPT.idpaps', 'program_and_projects.id')
                            ->orderBy('program_and_projects.paps_desc', 'asc')
                             ->get();

        //dd($data);
        //dd('OPCR Targets index');
        return inertia('OPCR/Target/Index',[
            "opcr_list_id"=>$opcr_list_id,
            "data"=>$data,
            "FFUNCCOD"=>$opcr_list->FFUNCCOD,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
        //$opcr_target_list = ProgramAndProject::where('FFUNCCOD', $opcr_list->FFUNCCOD)->get();
        //dd($opcr_target_list);
    }
    public function create(Request $request, $opcr_list_id){
        $opcr_list = OfficePerformanceCommitmentRatingList::where('id', $opcr_list_id)->first();
        //dd($request->idpaps);
        //
        $paps = ProgramAndProject::where('FFUNCCOD', $opcr_list->FFUNCCOD)->get();
        $success_indicators = SuccessIndicator::where('idpaps', $request->idpaps)->get();
        return inertia('OPCR/Target/Create',[
            "opcr_list_id"=>$opcr_list_id,
            "idpaps"=>$request->idpaps,
            "paps"=>$paps,
            "success_indicators"=>$success_indicators,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function store(Request $request){
        //dd($request);
        $attributes = $request->validate([
            'target_success_indicator'=>'required',
            'quantity'=>'required',
            'idpaps'=>'required',
            'office_performance_commitment_rating_list_id'=>'required',
        ]);
        $this->model->create($attributes);
        return redirect('/opcrtarget/'.$request->office_performance_commitment_rating_list_id)
                ->with('message','Office performance target added!');
    }
    public function edit(Request $request, $opcr_list_id){
        $data = $this->model->where('id', $opcr_list_id)->first();
        $opcr_list = OfficePerformanceCommitmentRatingList::where('id', $data->office_performance_commitment_rating_list_id)->first();
        $paps = ProgramAndProject::where('FFUNCCOD', $opcr_list->FFUNCCOD)->get();
        $success_indicators = SuccessIndicator::where('idpaps', $data->idpaps)->get();
        return inertia('OPCR/Target/Create',[
            "opcr_list_id"=>$opcr_list_id,
            "idpaps"=>$request->idpaps,
            "editData"=>$data,
            "paps"=>$paps,
            "success_indicators"=>$success_indicators,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function update(Request $request){
        $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);
        $data->update([
            'target_success_indicator'=>$request->target_success_indicator,
            'quantity'=>$request->quantity
        ]);

        return redirect('/opcrtarget/'.$request->office_performance_commitment_rating_list_id)
                ->with('message','Office performance target added!');
    }
    public function destroy(Request $request){
        //dd("delete");
        $opcr_list= OpcrTarget::findOrFail($request->id);
        $opcr_list->delete();
        $opcr_id = $opcr_list->office_performance_commitment_rating_list_id;
        return redirect('/opcrtarget/'.$opcr_id)
                ->with('error','Office performance goal deleted!');
    }
}
