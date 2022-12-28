<?php

namespace App\Http\Controllers;

use App\Models\OOE;
use App\Models\RAAOD;
use App\Models\Systemuser;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class RAAOController extends Controller
{
    public function construct(OOE $ooe_model, RAAOD $raaod_model){
        $this->ooe_model=$ooe_model;
        $this->raaod_model = $raaod_model;
    }
    public function index(Request $request)
    {
        //dd(Auth::user()->recid);
        // $data=DB::connection('mysql2')
        //         ->table('raaohs')
        //         ->paginate(10);
        $today = Carbon::now();
        $year = ''.$today->year.'';
        $year_object=DB::connection('mysql2')
                        ->table('raaohs')
                        ->select(DB::raw('DISTINCT(tyear)'))
                        ->orderBy('tyear','ASC')
                        ->get();
        $data_new=[];
        //dd($year);
        if($request->year!=''){
            $year=$request->year;
        }
        if(Auth::user()->UserType=='Administrator'){
            $data_new=DB::connection('mysql2')
                            ->table(DB::raw('(select raaohs.tyear,
                                                    raaohs.aipcode,
                                                    raaohs.fraodesc,
                                                    raaohs.falltcod,
                                                    raaohs.ffunccod,
                                                    raaohs.recid,
                                                    sources.fsource from raaohs
                                                    left join sources on
                                                    sources.recid = raaohs.idsource
                                                    where fraotype>\'2\') a'))
                            ->select('a.tyear',
                                        'a.fraodesc',
                                        'a.falltcod',
                                        'a.aipcode',
                                        'a.ffunccod',
                                        'a.fsource',
                                        'a.recid',
                                        'b.appropriation',
                                        'b.obligations',
                                        DB::raw('(100*(b.obligations/b.appropriation)) as utilization'))
                            ->leftJoin(DB::raw('(select idraao,sum(if(entrytype=\'1\', famount,0)) as appropriation ,sum(if(entrytype=\'3\', famount,0)) as obligations from raaods group by idraao) b'),'a.recid','=','b.idraao')
                            ->where('a.tyear','=',$year)
                            ->when($request->year, function($query, $year_search){
                                $query->where('a.tyear','=',$year_search);
                             })
                             ->when($request->search, function ($query, $searchItem) {
                                $query->whereNested(function($query) use ($searchItem){
                                                $query->where('a.FRAODESC', 'like', '%' . $searchItem . '%')
                                                    ->orWhere('a.FALLTCOD', 'like', '%' . $searchItem . '%')
                                                    ->orWhere('a.FFUNCCOD', 'like', '%' . $searchItem . '%');
                                        });
                            })
                            ->paginate(10);
            //dd($data_new);
            $data=DB::connection('mysql2')
                    ->table(DB::raw('raaohs r'))
                    ->select(
                        'r.recid',
                        'r.FRAODESC',
                        'r.aipcode',
                        'r.FFUNCCOD',
                        'r.FALLTCOD',
                        'r.tyear',
                        's.FSOURCE',
                        DB::raw('SUM(if(d.entrytype=1,d.famount,0)) as tapprop'),
                        DB::raw('SUM(if(d.entrytype=2,d.famount,0)) as tallot'),
                        DB::raw('SUM(if(d.entrytype=3,d.famount,0)) AS toblig')
                    )
                    ->join(DB::raw('raaods d'),'r.recid','=','d.idraao')
                    ->join(DB::raw('ooes o'),'o.recid','=','d.idooe')
                    ->join(DB::raw('sources s'), 's.recid','=','r.idsource')
                    ->where('r.FRAOTYPE','>',2)
                    ->where('r.tyear','=',$year)
                    ->when($request->year, function($query, $year_search){
                        $query->where('tyear','=',$year_search);
                     })
                     ->when($request->search, function ($query, $searchItem) {
                        $query->whereNested(function($query) use ($searchItem){
                                        $query->where('r.FRAODESC', 'like', '%' . $searchItem . '%')
                                            ->orWhere('r.FALLTCOD', 'like', '%' . $searchItem . '%')
                                            ->orWhere('r.FFUNCCOD', 'like', '%' . $searchItem . '%');
                                });
                    })
                    ->groupBy('d.idooe')
                    ->paginate(10);
        }else{
            /*
              $data=DB::connection('mysql2')
                 ->table('raaohs AS r')
                 ->leftjoin('accountaccess AS a','r.ffunccod','=','a.ffunccod')
                 ->leftjoin('systemusers AS su','su.recid','=','a.iduser')
                 ->select('r.recid','r.FRAODESC','r.FALLTCOD','r.FFUNCCOD','r.FFUNDCOD',
                        'r.FRAOTYPE','r.idsource','r.aipcode','r.excludetag','r.tyear')
                 ->when($request->year, function($query, $year_search){
                    $query->where('tyear','=',$year_search);
                 })
                 ->where('FRAOTYPE','>','2')
                 ->where('a.iduser','=',Auth::user()->recid)
                 ->where('r.tyear','=',$year)
                 ->when($request->search, function ($query, $searchItem) {
                    $query->whereNested(function($query) use ($searchItem){
                                    $query->where('r.FRAODESC', 'like', '%' . $searchItem . '%')
                                        ->orWhere('r.FALLTCOD', 'like', '%' . $searchItem . '%')
                                        ->orWhere('r.FFUNCCOD', 'like', '%' . $searchItem . '%');
                            })
                            ->where('a.iduser','=',Auth::user()->recid);
                })
                ->paginate(10);
             */

                $data_new=DB::connection('mysql2')
                            ->table(DB::raw('(select raaohs.tyear,
                                                    raaohs.aipcode,
                                                    raaohs.fraodesc,
                                                    raaohs.falltcod,
                                                    raaohs.ffunccod,
                                                    raaohs.recid,
                                                    sources.fsource from raaohs
                                                    left join sources on
                                                    sources.recid = raaohs.idsource
                                                    where fraotype>\'2\') a'))
                            ->select('a.tyear',
                                        'a.fraodesc',
                                        'a.falltcod',
                                        'a.aipcode',
                                        'a.ffunccod',
                                        'a.fsource',
                                        'a.recid',
                                        'b.appropriation',
                                        'b.obligations',
                                        DB::raw('(100*(b.obligations/b.appropriation)) as utilization'))
                            ->leftJoin(DB::raw('(select idraao,sum(if(entrytype=\'1\', famount,0)) as appropriation ,sum(if(entrytype=\'3\', famount,0)) as obligations from raaods group by idraao) b'),'a.recid','=','b.idraao')
                            ->leftjoin('accountaccess AS acc','a.ffunccod','=','acc.ffunccod')
                            ->leftjoin('systemusers AS su','su.recid','=','acc.iduser')
                            ->where('acc.iduser','=',Auth::user()->recid)
                            ->where('a.tyear','=',$year)
                            ->when($request->year, function($query, $year_search){
                                $query->where('a.tyear','=',$year_search);
                             })
                             ->when($request->search, function ($query, $searchItem) {
                                $query->whereNested(function($query) use ($searchItem){
                                                $query->where('a.FRAODESC', 'like', '%' . $searchItem . '%')
                                                    ->orWhere('a.FALLTCOD', 'like', '%' . $searchItem . '%')
                                                    ->orWhere('a.FFUNCCOD', 'like', '%' . $searchItem . '%');
                                        });
                            })
                            ->paginate(10);
             $data=DB::connection('mysql2')
                 ->table('raaohs AS r')
                 ->select(
                    'r.FRAODESC',
                    'r.aipcode',
                    'r.FFUNCCOD',
                    'r.FALLTCOD',
                    'r.tyear',
                    DB::raw('SUM(if(d.entrytype=1,d.famount,0)) as tapprop'),
                    DB::raw('SUM(if(d.entrytype=2,d.famount,0)) as tallot'),
                    DB::raw('SUM(if(d.entrytype=3,d.famount,0)) AS toblig')
                )
                 ->leftjoin('accountaccess AS a','r.ffunccod','=','a.ffunccod')
                 ->leftjoin('systemusers AS su','su.recid','=','a.iduser')
                 ->join(DB::raw('raaods d'),'r.recid','=','d.idraao')
                 ->join(DB::raw('ooes o'),'o.recid','=','d.idooe')
                 ->when($request->year, function($query, $year_search){
                    $query->where('tyear','=',$year_search);
                 })
                 ->where('FRAOTYPE','>','2')
                 ->where('a.iduser','=',Auth::user()->recid)
                 ->where('r.tyear','=',$year)
                 ->when($request->search, function ($query, $searchItem) {
                    $query->whereNested(function($query) use ($searchItem){
                                    $query->where('r.FRAODESC', 'like', '%' . $searchItem . '%')
                                        ->orWhere('r.FALLTCOD', 'like', '%' . $searchItem . '%')
                                        ->orWhere('r.FFUNCCOD', 'like', '%' . $searchItem . '%');
                            })
                            ->where('a.iduser','=',Auth::user()->recid);
                })
                ->groupBy('d.idooe')
                ->paginate(10);
        }

        //$summs = $this->raaod_model->with(['ooe']);
        //dd($summs);
        $users =Systemuser::on('mysql2')->get();
        //dd($data);


        //dd($year_object);
        return inertia('RAAO/Index',[
                            "data"=>$data,
                            "datanew"=>$data_new,
                            "filters" => $request->only(['search']),
                            "sysusers"=>$users,
                            "year"=> $year_object,
                            "year_sel"=>$year,
                            //"summs"=>$summs,
                            'can'=>[
                                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
                            ],
                    ]);
    }
}
class RAAO{
    public $id;
    public $name;
}
