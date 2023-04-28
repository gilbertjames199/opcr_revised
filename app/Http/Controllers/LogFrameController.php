<?php

namespace App\Http\Controllers;

use App\Models\AccountAccess;
use Illuminate\Http\Request;

class LogFrameController extends Controller
{
    public function index(Request $request){
        //dd('logframe');
        $accounts = AccountAccess::where('iduser',auth()->user()->recid)->with('func')->get();
        $functions = $accounts->pluck('func');
        return inertia('LogFrame/Index', [
            "data"=>$functions,
        ]);
    }
}
