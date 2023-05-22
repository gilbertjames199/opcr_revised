<?php

namespace App\Http\Controllers;

use App\Models\AccountAccess;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class OPCRController extends Controller
{
    //
    protected $model;
    public function __construct(AccountAccess $model)
    {
        $this->model=$model;
    }

    public function index(Request $request){
        //dd('logframe');
        //dd(auth()->user()->recid);
        // $accounts = $this->model->where('iduser',auth()->user()->recid)
        //             ->with('func')->get();

        $functions =$this->model
                        ->select('ff.FFUNCCOD','FFUNCTION')
                        ->Join(DB::raw('fms.functions ff'),'ff.FFUNCCOD','=','accountaccess.ffunccod')
                        ->where('iduser',auth()->user()->recid)
                        ->get();
        //dd($functions);
        //dd($accounts); 1121
        //$functions = $accounts->pluck('func');
        //$fa = FFUNCCOD::where('FFUNCCOD','1121')->with('acc')->get();
        //dd($fa[0]->FFUNCCOD." gaccounce ".$accounts[0]->ffunccod);
        //dd($fa);
        return inertia('OPCR/Index', [
            "data"=>$functions,
        ]);
    }
}
