<?php

namespace App\Http\Controllers;

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


}
