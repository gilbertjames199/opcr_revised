<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ObjectOfExpenditureController extends Controller
{
    protected $ooes;
    public function filterOOES(Request $request){
        //dd("ooes");
        $data = DB::connection('mysql2')->table('raaohs')
                    ->select('ooes.FACTCODE','ooes.FOOEDESC','ooes.assetaccountcode',
                        'ooes.consotag', 'ooes.ftype2','ooes.fueltag',
                        'ooes.recid', 'raaohs.FFUNCCOD', 'raaohs.FRAOTYPE','raaohs.idprogram',
                    )
                    ->when($request->year, function($query, $searchItem)use($request){
                        $query->where('YEAR(raaods.fdate)', $request->year);
                    })
                    ->when($request->idprogram, function($query, $searchItem)use($request){
                        $query->where('raaohs.idprogram', $request->idprogram);
                    })
                    ->when($request->FFUNCCOD, function($query, $searchItem)use($request){
                        $query->where('raaohs.FFUNCCOD', $request->FFUNCCOD);
                    })
                    ->when($request->raaotype, function($query, $searchItem)use($request){
                        $query->where('raaohs.FRAOTYPE', $request->raaotype);
                    })
                    ->join('raaods', 'raaods.idraao','raaohs.recid')
                    ->join('ooes','ooes.recid','raaods.idooe')
                    ->groupBy('ooes.recid')
                    ->orderBy('ooes.FOOEDESC')
                    ->get()
                    ->map(function($item){
                        $past_year = DB::connection('mysql2')
                                        ->table('raaods')
                                        ->where('raaohs.idprogram', $item->idprogram)
                                        ->where('raaohs.FFUNCCOD', $item->FFUNCCOD)
                                        ->where('raaohs.FRAOTYPE', $item->FRAOTYPE)
                                        ->where('raaods.entrytype', '2')
                                        ->join('raaohs','raaohs.recid','raaods.idraao')
                                        ->sum('raaods.famount');
                        // // $sem1 = DB::connection('mysql2')
                        // //                 ->table('raaods')
                        // //                 ->whereRaw('raaohs.idprogram', $item->idprogram)
                        // //                 ->whereRaw('raaohs.FFUNCCOD', $item->FFUNCCOD)
                        // //                 ->whereRaw('raaohs.FRAOTYPE', $item->FRAOTYPE)
                        // //                 ->whereRaw('month(raaods.fdate)','<','7')
                        // //                 ->join('raaohs','raaohs.recid','raaods.idraao')
                        // //                 ->sum('raaods.famount');
                        // $sem2 = DB::connection('mysql2')
                        //                 ->table('raaods')
                        //                 ->where('raaohs.idprogram', $item->idprogram)
                        //                 ->where('raaohs.FFUNCCOD', $item->FFUNCCOD)
                        //                 ->where('raaohs.FRAOTYPE', $item->FRAOTYPE)
                        //                 ->join('raaohs','raaohs.recid','raaods.idraao')
                        //                 ->sum('raaods.famount');
                        return [
                            'FACTCODE'=>$item->FACTCODE,
                            'FOOEDESC'=>$item->FOOEDESC,
                            'assetaccountcode'=>$item->assetaccountcode,
                            'consotag'=>$item->consotag,
                            'ftype2'=>$item->ftype2,
                            'fueltag'=>$item->fueltag,
                            'recid'=>$item->recid,
                            'FFUNCCOD'=>$item->FFUNCCOD,
                            'FRAOTYPE'=>$item->FRAOTYPE,
                            'idprogram'=>$item->idprogram,
                            'past_year'=>$past_year,
                            // 'sem1'=>$sem1
                        ];
                    });

                    //->groupBy('ooes.recid')
        // $totalCount = $data->count();
        // $uniqueOoesRecidCount = $data->pluck('recid')->unique()->count();
        // dd('totalCount: '.$totalCount.' uniqueOoesRecidCount: '.$uniqueOoesRecidCount);
        return $data;
    }
}
