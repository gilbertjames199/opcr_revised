<?php

namespace App\Http\Controllers;

use App\Models\DailyAccomplishment;
use App\Models\FFUNCCOD;
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

        $functions = FFUNCCOD::select('functions.FFUNCCOD','functions.FFUNCTION')
                    ->Join(DB::raw('fms.accountaccess acc'),'acc.FFUNCCOD','=','functions.FFUNCCOD')
                    ->Join(DB::raw('fms.systemusers sysu'),'sysu.recid','=','acc.iduser')
                    ->where('sysu.recid',$idn)
                    ->get();
        //dd($mfos);
        //dd($data->pluck('mfo_desc'));
        return inertia('Daily_Accomplishment/Direct',[
            "data"=>$data,
            "mfos"=>$mfos,
            "filters" => $request->only(['search']),
            "functions"=>$functions,
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
        $FUNCCTION = $request->office;
        return [
            "date_from"=>$date_from,
            "date_to"=>$date_to,
            "FFUNCCOD"=>$FFUNCCOD,
            "office"=>$FUNCCTION,
        ];
    }
    public function mfo_accomplishment(Request $request){

        $mfos = MajorFinalOutput::select('major_final_outputs.id','major_final_outputs.mfo_desc')
                ->where('major_final_outputs.FFUNCCOD', $request->FFUNCCOD)
                ->join('program_and_projects','major_final_outputs.id','program_and_projects.idmfo')
                ->join('daily_accomplishments','daily_accomplishments.idpaps','program_and_projects.id')
                ->groupBy('major_final_outputs.id')
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
        $paps = ProgramAndProject::select('program_and_projects.paps_desc','program_and_projects.id')
                ->where('program_and_projects.idmfo', $request->idmfo)
                ->join('daily_accomplishments','daily_accomplishments.idpaps','program_and_projects.id')
                ->groupBy('program_and_projects.id')
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
