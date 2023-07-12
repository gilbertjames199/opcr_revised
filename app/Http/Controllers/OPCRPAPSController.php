<?php

namespace App\Http\Controllers;

use App\Helpers\PaginationHelper;
use App\Models\AccountAccess;
use App\Models\BudgetRequirement;
use App\Models\MajorFinalOutput;
use App\Models\ProgramAndProject;
use App\Models\RevisionPlan;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OPCRPAPSController extends Controller
{
    protected $model;
    protected $function;
    public function __construct(ProgramAndProject $model, AccountAccess $function)
    {
        //$this->middleware(['auth','verified']);
        $this->model = $model;
        $this->function = $function;
    }

    public function index(Request $request, $id)
    {

        //dd("not direct");
        $functions =$this->function
                        ->select('ff.FFUNCCOD','FFUNCTION')
                        ->Join(DB::raw('fms.functions ff'),'ff.FFUNCCOD','=','accountaccess.ffunccod')
                        ->where('iduser',auth()->user()->recid)
                        ->get()
                        ->map(function($item){

                            return [
                                "FFUNCCOD"=>$item->FFUNCCOD,
                                "FFUNCTION"=>$item->FFUNCTION,
                            ];
                        });
        $data = ProgramAndProject::where('idmfo',$id)
                ->with('MFO')
                ->when($request->search, function($query, $searchItem){
                    $query->where('paps_desc','LIKE','%'.$searchItem.'%');
                })
                ->when($request->mfosel, function($query, $searchItem){
                    $query->where('idmfo','=',$searchItem);
                })
                ->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString();

        //$data = ProgramAndProject::get();

        //dd($data);
        return inertia('PAPS/Index',[
            "function"=>$functions,
            "data"=>$data,
            "idmfo"=>$id,
            "filters" => $request->only(['search']),
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function direct(Request $request){

        $functions =$this->function
        ->select('ff.FFUNCCOD','FFUNCTION')
        ->Join(DB::raw('fms.functions ff'),'ff.FFUNCCOD','=','accountaccess.ffunccod')
        ->where('iduser',auth()->user()->recid)
        ->get()
        ->map(function($item){
            $my_year = now()->year;

            // dd($my_year);

            //REVISION PLAN ID/ GET MOOE & PS
            $revision_plan = RevisionPlan::where('idmfo','0')
                                ->where('idpaps','0')
                                ->where('FFUNCCOD', $item->FFUNCCOD)
                                ->where('year_period', $my_year)
                                ->first();
            $mooe="0.00";
            $ps = "0.00";
            if($revision_plan){
                $mooe1 = BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                        ->where('category','Maintenance, Operating, and Other Expenses')
                        ->sum('amount');

                $ps1 =BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                        ->where('category','Personnel Services')
                        ->sum('amount');
                $mooe2 = (float)$mooe1;
                $ps2 = (float)$ps1;
                $mooe = number_format($mooe2,2);
                $ps = number_format($ps2,2);
            }else{
                //dd("empty no ps budget");
            }
            return [
                "FFUNCCOD"=>$item->FFUNCCOD,
                "FFUNCTION"=>$item->FFUNCTION,
                "MOOE"=>$mooe,
                "PS"=>$ps,
            ];
        });
        $mooe="0.00";
        $ps = "0.00";

        // dd($functions);
        //dd("direct");
        //dd($request->mfosel);
        // dd($request->mfosel);
        $idn = auth()->user()->recid;
        $data = $this->model->with('MFO')
                ->when($request->search, function($query, $searchItem){
                    $query->where('paps_desc','LIKE','%'.$searchItem.'%');
                })
                ->when($request->mfosel, function($query, $searchItem){
                    $query->where('idmfo','=',$searchItem);
                })
                ->Join(DB::raw('fms.accountaccess acc'),'acc.FFUNCCOD','=','program_and_projects.FFUNCCOD')
                ->Join(DB::raw('fms.systemusers sysu'),'sysu.recid','=','acc.iduser')
                ->where('sysu.recid',$idn)
                ->orderBy('created_at', 'desc')
                ->get();
        $mfos=MajorFinalOutput::all();

        //USER ACCESS
        $idn = auth()->user()->recid;
        $access = DB::connection('mysql2')->table('accountaccess')
                ->select(DB::raw('TRIM(accountaccess.ffunccod) AS a_ffunccod'))
                ->join('systemusers','systemusers.recid','=','accountaccess.iduser')
                ->where('systemusers.recid',$idn)
                ->get();
        $accessFFUNCCOD = $access->pluck('a_ffunccod')->toArray();

        //FILTER PAPS
        $result = $data->whereIn('FFUNCCOD', $accessFFUNCCOD);
        $showPerPage=10;
        $paginatedResult =PaginationHelper::paginate($result, $showPerPage);

        //FILTER MFO
        $mfos = $mfos->whereIn('FFUNCCOD', $accessFFUNCCOD);
        //dd($mfos);
        //dd($data->pluck('mfo_desc'));
        return inertia('OPCRPaps/Direct',[
            "functions" => $functions,
            "MOOE" => $mooe,
            "PS" => $ps,
            "data"=>$paginatedResult,
            "mfos"=>$mfos,
            "filters" => $request->only(['search']),
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function create(Request $request, $idpaps){
        //dd('create');
        $paps = ProgramAndProject::findOrFail($idpaps);
        return inertia('OPCRPaps/Create',[
            'paps'=>$paps,
            'idpaps'=>$idpaps,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
}
