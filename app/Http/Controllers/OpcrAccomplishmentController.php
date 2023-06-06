<?php

namespace App\Http\Controllers;

use App\Models\OfficePerformanceCommitmentRatingList;
use App\Models\OpcrAccomplishment;
use App\Models\OpcrTarget;
use App\Models\ProgramAndProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class OpcrAccomplishmentController extends Controller
{
    protected $model;
    public function __construct(OpcrAccomplishment $model)
    {
        $this->model=$model;
    }
    public function index(Request $request, $opcr_list_id){
        $opcr_list = OfficePerformanceCommitmentRatingList::where('id', $opcr_list_id)->first();
        $data = ProgramAndProject::where('FFUNCCOD', $opcr_list->FFUNCCOD)
                            ->select('program_and_projects.id AS idpaps',
                                    'program_and_projects.paps_desc',
                                    'OPT.id AS idtarget',
                                    'OPT.target_success_indicator',
                                    'OPT.quantity AS target_quantity',
                                    'OPTAC.actual_accomplishments',
                                    'OPTAC.id',
                                    'OPTAC.quantity',
                                    'SU.success_indicator')
                            ->leftjoin('success_indicators AS SU', 'SU.idpaps', 'program_and_projects.id')
                            ->leftjoin(DB::raw('(Select id,
                                                        office_performance_commitment_rating_list_id,
                                                        idpaps, quantity, target_success_indicator
                                FROM opcr_targets WHERE opcr_targets.office_performance_commitment_rating_list_id='.$opcr_list_id.') AS OPT'), 'OPT.idpaps', 'program_and_projects.id')
                             ->leftjoin(DB::raw('(Select id,
                                                    office_performance_commitment_rating_list_id,
                                                    idpaps, quantity, actual_accomplishments
                                        FROM opcr_accomplishments WHERE
                                        opcr_accomplishments.office_performance_commitment_rating_list_id='.$opcr_list_id.') AS OPTAC'),
                                        'OPT.idpaps', 'program_and_projects.id')
                            ->orderBy('program_and_projects.paps_desc', 'asc')
                            ->orderBy('OPT.target_success_indicator','asc')
                            ->get()->map(function($item){
                                return [
                                    'idpaps'=>$item->idpaps,
                                    'paps_desc'=>$item->paps_desc,
                                    'idtarget'=>$item->idtarget,
                                    'target_success_indicator'=>$item->target_success_indicator,
                                    'target_quantity'=>$item->target_quantity,
                                    'idpaps'=>$item->idpaps,
                                    'idpaps'=>$item->idpaps,
                                    'idpaps'=>$item->idpaps,
                                    'idpaps'=>$item->idpaps,
                                ];
                            });
        //dd($data);
        return inertia('OPCR/Accomplishment/Index',[
            "opcr_list_id"=>$opcr_list_id,
            "data"=>$data,
            "FFUNCCOD"=>$opcr_list->FFUNCCOD,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function create(Request $request, $opcr_list_id){
        //dd($opcr_list_id);
        $opcr_list = OfficePerformanceCommitmentRatingList::where('id', $opcr_list_id)->first();
        //find paps
        $paps = ProgramAndProject::where('id', $request->idpaps)->first();
        //find targets
        $targets =OpcrTarget::where('id', $request->idtarget)->get();
        //load create form
        return inertia('OPCR/Accomplishment/Create',[
            "opcr_list_id"=>$opcr_list_id,
            "idpaps"=>$request->idpaps,
            "paps"=>$paps,
            "targets"=>$targets,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function store(Request $request){
        //dd($request);
        $attributes = $request->validate([
            'actual_accomplishments'=>'required',
            'quantity'=>'required|numeric',
            'idpaps'=>'required',
            'opcr_target_id'=>'required',
            'office_performance_commitment_rating_list_id'=>'required',
            'opcr_target_id'=>'required'
        ],[
            'actual_accomplishments.required'=>'Actual accomplishment is required',
            'quantity.required'=>'Accomplishment quantity is required',
            'quantity.numeric'=>'Accomplishment quantity must be a numnber',
            'opcr_target_id.required'=>'Target is required',
        ]
        );
        $this->model->create($attributes);
        return redirect('/opcraccomplishment/'.$request->office_performance_commitment_rating_list_id)
                ->with('message','Office performance accomplishment added!');
    }
    public function edit(Request $request, $opcr_list_id){}
    public function update(Request $request){}
    public function destroy(Request $request){}
}
