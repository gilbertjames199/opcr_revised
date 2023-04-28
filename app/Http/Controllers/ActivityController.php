<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Strategy;
use Illuminate\Http\Request;

class ActivityController extends Controller
{
    //
    protected $model;
    public function __construct(Activity $model){
        $this->model=$model;
    }
    public function index(Request $request, $idstrat){
        $strat= Strategy::first('id',$idstrat)->get();
        $myid=$strat->pluck('idpaps');
        $idpaps=$myid[0];

    }
}
