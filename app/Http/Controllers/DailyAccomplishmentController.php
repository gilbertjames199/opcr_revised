<?php

namespace App\Http\Controllers;

use App\Models\DailyAccomplishment;
use App\Models\MajorFinalOutput;
use App\Models\ProgramAndProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class DailyAccomplishmentController extends Controller
{
    //
    protected $model;
    public function __construct(ProgramAndProject $model)
    {
        $this->model = $model;
    }

    public function direct(Request $request){
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
                ->paginate(10)
                ->withQueryString();
        $mfos=MajorFinalOutput::all();
        //dd($mfos);
        //dd($data->pluck('mfo_desc'));
        return inertia('Daily_Accomplishment/Direct',[
            "data"=>$data,
            "mfos"=>$mfos,
            "filters" => $request->only(['search']),
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function main_accomplishment(Request $request){
        $date_from = $request->date_from;
        $date_to = $request->date_to;
        $FFUNCCOD = $request->FFUNCCOD;

        return [
            "date_from"=>$date_from,
            "date_to"=>$date_to,
            "FFUNCCOD"=>$FFUNCCOD,
        ];
    }
    public function mfo_accomplishment(Request $request){
        $mfos = MajorFinalOutput::where('FFUNCCOD', $request->FFUNCCOD)
                ->get()
                ->map(function($item)use($request){
                    $date_from = $request->date_from;
                    $date_to = $request->date_to;
                    return [
                        'idmfo'=>$item->id,
                        'mfo_desc'=>$item->mfo_desc,
                        "date_from"=>$date_from,
                        "date_to"=>$date_to
                    ];
                });
        return $mfos;
    }
    public function paps_accomplishment(Request $request){
        $paps = ProgramAndProject::where('idmfo', $request->idmfo)
                ->get()
                ->map(function($item)use($request){
                    $date_from = $request->date_from;
                    $date_to = $request->date_to;
                    return [
                        'idpaps'=>$item->id,
                        'paps_desc'=>$item->paps_desc,
                        "date_from"=>$date_from,
                        "date_to"=>$date_to
                    ];
                });
        return $paps;
    }
    public function daily_accomplishment(Request $request){
        $accomp = DailyAccomplishment::where('idpaps', $request->idpaps)
                    ->whereBetween('date',[$request->date_from, $request->date_to])
                    ->get()
                    ->map(function($item)use($request){
                        return [
                            'description'=>$item->description,
                            'quantity'=>$item->quantity,
                            'remarks'=>$item->remarks,
                            'date'=>$item->date,
                        ];
                    });
        return $accomp;
    }

}
