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
        //SELECT(,
        // 'OPTAC.actual_accomplishments',
        // 'OPTAC.id',
        // 'OPTAC.quantity',)
        //****************************************88 */
        // ->leftjoin(DB::raw('(Select id,
        //                                             office_performance_commitment_rating_list_id,
        //                                             idpaps, quantity, actual_accomplishments
        //                                 FROM opcr_accomplishments WHERE
        //                                 opcr_accomplishments.office_performance_commitment_rating_list_id='.$opcr_list_id.') AS OPTAC'),
        //                                 'OPT.idpaps', 'program_and_projects.id')
        $opcr_list = OfficePerformanceCommitmentRatingList::where('id', $opcr_list_id)->first();
        $data = ProgramAndProject::where('FFUNCCOD', $opcr_list->FFUNCCOD)
                            ->select('program_and_projects.id AS idpaps',
                                    'program_and_projects.paps_desc',
                                    'OPT.id AS idtarget',
                                    'OPT.quantity',
                                    'OPT.target_success_indicator',
                                    'OPT.quantity AS target_quantity',
                                    'SU.success_indicator')
                            ->leftjoin('success_indicators AS SU', 'SU.idpaps', 'program_and_projects.id')
                            ->leftjoin(DB::raw('(Select id,
                                                        office_performance_commitment_rating_list_id,
                                                        idpaps, quantity, target_success_indicator
                                FROM opcr_targets WHERE opcr_targets.office_performance_commitment_rating_list_id='.$opcr_list_id.') AS OPT'), 'OPT.idpaps', 'program_and_projects.id')
                            ->orderBy('program_and_projects.paps_desc', 'asc')
                            ->orderBy('OPT.target_success_indicator','asc')
                            ->get()->map(function($item){
                                $accomplishment = OpcrAccomplishment::where('opcr_target_id', $item->idtarget)->first();
                                $acc ="";
                                $id = null;
                                $quant ="0";
                                if($accomplishment){
                                    $acc=$accomplishment->actual_accomplishments;
                                    $id =$accomplishment->id;
                                    $quant=$accomplishment->quantity;
                                }
                                return [
                                    'idpaps'=>$item->idpaps,
                                    'paps_desc'=>$item->paps_desc,
                                    'idtarget'=>$item->idtarget,
                                    'target_quantity'=>$item->quantity,
                                    'target_success_indicator'=>$item->target_success_indicator,
                                    'target_quantity'=>$item->target_quantity,
                                    'actual_accomplishments'=>$acc,
                                    'accomplishment_quantity'=>$quant,
                                    'id'=>$id,
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
    public function edit(Request $request, $opcr_list_id){
        //dd($opcr_list_id);
        //FIND the OPCR Accomplishment
        $data = $this->model->where('id', $opcr_list_id)->first();

        //FIND the OPCR
        $opcr_list = OfficePerformanceCommitmentRatingList::where('id', $data->office_performance_commitment_rating_list_id)->first();
        //find paps
        $paps = ProgramAndProject::where('id', $data->idpaps)->first();
        //find targets
        $targets =OpcrTarget::where('id', $data->opcr_target_id)->get();

        //load create form
        return inertia('OPCR/Accomplishment/Create',[
            "opcr_list_id"=>$data->office_performance_commitment_rating_list_id,
            "idpaps"=>$request->idpaps,
            "paps"=>$paps,
            "targets"=>$targets,
            "editData"=>$data,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function update(Request $request){
        //dd('opcr accomplishment update');
        $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);
        $data->update([
            'actual_accomplishments'=>$request->actual_accomplishments,
            'opcr_target_id'=>$request->opcr_target_id,
            'quantity'=>$request->quantity
        ]);

        return redirect('/opcraccomplishment/'.$request->office_performance_commitment_rating_list_id)
                ->with('message','Office performance target added!');
    }
    public function destroy(Request $request){
        $opcr_list= OpcrAccomplishment::findOrFail($request->id);

        $opcr_id = $opcr_list->office_performance_commitment_rating_list_id;
        $opcr_list->delete();
        return redirect('/opcraccomplishment/'.$opcr_id)
                ->with('error','OPCR Accomplishment deleted!');
        //dd("delete");
    }
}
