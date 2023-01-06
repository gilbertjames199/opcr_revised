<?php

namespace App\Http\Controllers;

use App\Models\RAAOHS;
use App\Models\Target;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TargetController extends Controller
{
    public function __construct(Target $model)
    {
        //$this->middleware(['auth','verified']);
        $this->model = $model;
    }
    public function index(Request $request)
    {
        $raao_id1='0';
        // $rrr=session()->get('raao_id');
        // if($rrr){
        //     $raao_id1=session()->get('raao_id');
        // }
        $today = Carbon::now();
        $year = ''.$today->year.'';
        if($request->id_raao){
            $raao_id1=$request->id_raao;
            $year = RAAOHS::where('recid',$raao_id1)->value('tyear');

        }

        $data = $this->model
                ->with('accomp')
                ->where('idraao', $raao_id1)
                ->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString();

        return inertia('Targets/Index',[
            "data"=>$data,
            "raao_id"=>$raao_id1,
            "year"=>$year,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function list(Request $request, $raao_id)
    {
        $raao_id1='0';
        // $rrr=session()->get('raao_id');
        // if($rrr){
        //     $raao_id1=session()->get('raao_id');
        // }

        if($request->id_raao){
            $raao_id1=$request->id_raao;
        }
        //dd($request->id_raao);
        //dd('request->id_raao'.$request->id_raao);
        // /dd($request->url());

        // DB::table(DB::raw('targets T'))
        // ->select('t.description','t.brgy',DB::raw('(SELECT SUM(a.accomplishment_qty) FROM accomplishments WHERE id=t.id) AS \'sum_accomp'))
        // ->join(DB::raw('accomplishments A'),'T.id','=','A.idtarget')
        // ->get();
        $data = $this->model
                ->with('accomp')
                ->where('idraao', $raao_id1)
                ->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString();

        return inertia('Targets/Index',[
            "data"=>$data,
            "raao_id"=>$raao_id,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function create(Request $request, $raao_id, $year)
    {
        if(!$year){
            $today = Carbon::now();
            $year = ''.$today->year.'';
        }


        $raao=[];
        if(Auth::user()->UserType=='Administrator'){
            $raao=DB::connection('mysql2')
                    ->table(DB::raw('raaohs r'))
                    ->select(
                        'r.recid',
                        'r.FRAODESC'
                    )
                    ->join(DB::raw('raaods d'),'r.recid','=','d.idraao')
                    ->join(DB::raw('ooes o'),'o.recid','=','d.idooe')
                    ->where('r.FRAOTYPE','>',2)
                    ->where('r.tyear','=',$year)
                    ->groupBy('d.idooe')
                    ->get();
        }else{
            $raao=DB::connection('mysql2')
                ->table('raaohs AS r')
                ->select(
                'r.recid',
                'r.FRAODESC',
                )
                ->leftjoin('accountaccess AS a','r.ffunccod','=','a.ffunccod')
                ->leftjoin('systemusers AS su','su.recid','=','a.iduser')
                ->join(DB::raw('raaods d'),'r.recid','=','d.idraao')
                ->join(DB::raw('ooes o'),'o.recid','=','d.idooe')
                ->where('FRAOTYPE','>','2')
                ->where('a.iduser','=',Auth::user()->recid)
            ->groupBy('d.idooe')
            ->get();
        }

        //dd($raao);
        /*
        $raao=DB::connection('mysql2')
                 ->table('raaohs AS r')
                 ->leftjoin('accountaccess AS a','r.ffunccod','=','a.ffunccod')
                 ->leftjoin('systemusers AS su','su.recid','=','a.iduser')
                 ->select('r.recid AS recid','r.FRAODESC AS FRAODESC')
                 ->where('a.iduser','=',Auth::user()->recid)
                 ->when($request->search, function ($query, $searchItem) {
                    $query->whereNested(function($query) use ($searchItem){
                                    $query->where('r.FRAODESC', 'like', '%' . $searchItem . '%')
                                        ->orWhere('r.FALLTCOD', 'like', '%' . $searchItem . '%')
                                        ->orWhere('r.FFUNCCOD', 'like', '%' . $searchItem . '%');
                            })
                            ->where('a.iduser','=',Auth::user()->recid);
                })
                ->where('r.FRAOTYPE','>',2)
                ->get();*/
        // $raao=DB::connection('mysql2')->table('raaohs')
        //         ->select('recid','FRAODESC')
        //         ->get();
        $indicator=DB::table('indicators')->select('id','description')->get();
        $mun=DB::table('municipalities')
                        ->select('citymunDesc','citymunCode')
                        ->get();
        //dd($mun);
        return inertia('Targets/Create',[
            'indicator'=>$indicator,
            'mun'=>$mun,
            'raao_id'=>$raao_id,
            'raao'=>$raao,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
            'idraao' => 'required',
            //'idooe' => 'required',
            'idindicator' => 'required',
            'description' => 'required',
            'brgy' => 'required',
            'municipality' => 'required',
            'planned_period_from' => 'required',
            'planned_period_to' => 'required',
            'planned_budget' => 'required',
            'target_qty' => 'required',
            'onsite_tag' => 'required',
            'target_qty1'=> 'required',
            'target_qty2'=> 'required',
            'target_qty3'=> 'required',
            'target_qty4'=> 'required',
        ]);

        $this->model->create($attributes);
        $request->pass='';
        $request->id_raao=$request->idraao;
        //dd($attributes);
        //return redirect('/targets')->with('raao_id',$request->idraao)->with('message', 'Target added');
        return redirect('/targets?id_raao='.$request->id_raao)
                ->with('message','Target added');
    }
    public function edit(Request $request, $id)
    {
        $data = $this->model->where('id', $id)->first([
            'id',
            'idraao',
            'idindicator',
            'description',
            'brgy',
            'municipality',
            'planned_period_from',
            'planned_period_to',
            'planned_budget',
            'target_qty',
            'onsite_tag',
            'target_qty1',
            'target_qty2',
            'target_qty3',
            'target_qty4'
        ]);
        $indicator=DB::table('indicators')->select('id','description')->get();
        $raao=DB::connection('mysql2')
                 ->table('raaohs AS r')
                 ->leftjoin('accountaccess AS a','r.ffunccod','=','a.ffunccod')
                 ->leftjoin('systemusers AS su','su.recid','=','a.iduser')
                 ->select('r.recid AS recid','r.FRAODESC AS FRAODESC')
                 ->where('a.iduser','=',Auth::user()->recid)
                 ->where('r.FRAOTYPE','>',2)
                 ->when($request->search, function ($query, $searchItem) {
                    $query->whereNested(function($query) use ($searchItem){
                                    $query->where('r.FRAODESC', 'like', '%' . $searchItem . '%')
                                        ->orWhere('r.FALLTCOD', 'like', '%' . $searchItem . '%')
                                        ->orWhere('r.FFUNCCOD', 'like', '%' . $searchItem . '%');
                            })
                            ->where('a.iduser','=',Auth::user()->recid);
                })
                ->get();
        // $raao=DB::connection('mysql2')->table('raaohs')
        //         ->select('recid','FRAODESC')
        //         ->get();
        $mun=DB::table('municipalities')
                        ->select('citymunDesc','citymunCode')
                        ->get();
        $bari=DB::table('barangays')
                ->select('barangays.brgyDesc','municipalities.citymunDesc')
                ->join('municipalities','barangays.citymunCode','=','municipalities.citymunCode')
                ->where('municipalities.citymunDesc','LIKE','%'.$data->municipality.'%')
                ->orderBy('barangays.brgyDesc','ASC')
                ->get();
        return inertia('Targets/Create', [
            "editData" => $data,
            "mun"=>$mun,
            "bari"=>$bari,
            "raao"=>$raao,
            "indicator"=>$indicator,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function update(Request $request)
    {
        $data = $this->model->findOrFail($request->id);

        $data->update([
            'idraao'=>$request->idraao,
            'idindicator'=>$request->idindicator,
            'description'=>$request->description,
            'brgy'=>$request->brgy,
            'municipality'=>$request->municipality,
            'planned_period_from' => $request->planned_period_from,
            'planned_period_to'=>$request->planned_period_to,
            'planned_budget'=>$request->planned_budget,
            'target_qty'=>$request->target_qty,
            'onsite_tag'=>$request->onsite_tag,
            'target_qty1'=>$request->target_qty1,
            'target_qty2'=>$request->target_qty2,
            'target_qty3'=>$request->target_qty3,
            'target_qty4'=>$request->target_qty4,
        ]);

        return redirect('/targets?id_raao='.$request->idraao)
                ->with('message','Target added');

    }
    public function destroy(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        $data->delete();
        //dd($request->raao_id);
        return redirect('/targets?id_raao='.$request->raao_id)->with('warning', 'Target deleted');
    }
    public function ret(Request $request, $target_id)
    {
        //FROM Accomplishments to Targets
        $data = $this->model->findOrFail($target_id);
        //dd($data->idraao);
        return redirect('/targets?id_raao='.$data->idraao);
    }

}
