<?php

namespace App\Http\Controllers;

use App\Helpers\PaginationHelper;
use App\Models\AccountAccess;
use App\Models\MajorFinalOutput;
use App\Models\Sector;
use Illuminate\Http\Request;
use App\Models\Sectoral;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class SectoralController extends Controller
{
    protected $model;
    public function __construct(Sectoral $model)
    {
       $this->model = $model;
    }


    //
    public function index(Request $request){

        $data = $this->model
                    ->orderBy('created_at', 'desc')
                    ->with('sectors')
                    ->get();

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

        return inertia('Sectoral/Index',[
            "data"=>$paginatedResult,
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
        $sectors = Sector::get();
        return inertia('Sectoral/addSector',[
            'sectors'=>$sectors,
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
            'sector' => 'required',
            'FFUNCCOD'=> 'required',
        ]);
        //dd($attributes);
        $this->model->create($attributes);
        return redirect('/Sectoral')
                ->with('message','Sectoral Goal added');
    }

    public function edit(Request $request, $id){
        $functions = AccountAccess::where('iduser',auth()->user()->recid)
                    ->Join(DB::Raw('fms.functions ff'),'ff.FFUNCCOD','accountaccess.ffunccod')
                    ->with('func')->get();
        $data = $this->model->where('id', $id)->first([
            'id',
            'goal_description',
            'sector',
            'FFUNCCOD'
        ]);
        $sectors = Sector::get();
        return inertia('Sectoral/addSector', [
            "editData" => $data,
            'sectors'=>$sectors,
            'functions'=>$functions,
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
            'goal_description'=>$request->goal_description,
            'sector' => $request->sector
        ]);

        return redirect('/Sectoral')
                ->with('message','Sectoral Goal updated');
    }

    public function destroy(Request $request){
        $count_mfo =MajorFinalOutput::where('id_sec_outcome', $request->id)->count();
        $msg="";
        $status ="";
        if($count_mfo>0){
            $msg="Unable to delete!";
            $status ="error";
        }else{
            $msg="Sectoral outcome deleted";
            $status ="message";
            $data = $this->model->findOrFail($request->id);
            $data->delete();

        }
        //dd($request->raao_id);
        return redirect('/Sectoral')->with($status, $msg);

    }
}
