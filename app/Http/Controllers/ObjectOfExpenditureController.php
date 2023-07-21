<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ObjectOfExpenditureController extends Controller
{
    protected $ooes;
    public function filterOOES(Request $request){
        //dd("ooes");
        $year_current = date('Y');
        $year_next = intval($year_current)+1;

        // $data = DB::connection('mysql2')
        //         ->table('raaohs')
        //         ->select(
        //             'ooes.FACTCODE',
        //             'ooes.FOOEDESC',
        //             'ooes.assetaccountcode',
        //             'ooes.consotag',
        //             'ooes.ftype2',
        //             'ooes.fueltag',
        //             'ooes.recid',
        //             'raaohs.FFUNCCOD',
        //             'raaohs.FRAOTYPE',
        //             'raaohs.idprogram',
        //             DB::raw("SUM(CASE WHEN raaods.entrytype = 2 AND YEAR(raaods.fdate) = ".$year_current." THEN raaods.famount ELSE 0 END) AS past_year"),
        //             DB::raw("SUM(CASE WHEN raaods.entrytype = 3 AND YEAR(raaods.fdate) = ".$year_current." THEN raaods.famount ELSE 0 END) AS sem1"),
        //             DB::raw("SUM(CASE WHEN raaods.entrytype = 1 AND YEAR(raaods.fdate) = ".$year_current." THEN raaods.famount ELSE 0 END) AS sem2"),
        //             'raaods.famount'
        //         )
        //         ->join('raaods', 'raaods.idraao', '=', 'raaohs.recid')
        //         ->join('ooes', 'ooes.recid', '=', 'raaods.idooe')
        //         ->whereYear('raaods.fdate', $year_current)
        //         ->whereIn('raaods.entrytype', [1, 2, 3])
        //         ->groupBy('ooes.recid')
        //         ->orderBy('ooes.FOOEDESC')
        //         ->get()
        //         ->map(function ($item) {
        //             return [
        //                 'FACTCODE' => $item->FACTCODE,
        //                 'FOOEDESC' => $item->FOOEDESC,
        //                 'assetaccountcode' => $item->assetaccountcode,
        //                 'consotag' => $item->consotag,
        //                 'ftype2' => $item->ftype2,
        //                 'fueltag' => $item->fueltag,
        //                 'recid' => $item->recid,
        //                 'FFUNCCOD' => $item->FFUNCCOD,
        //                 'FRAOTYPE' => $item->FRAOTYPE,
        //                 'idprogram' => $item->idprogram,
        //                 'past_year' => $item->past_year,
        //                 'sem1' => $item->sem1,
        //                 'sem2' => $item->sem2,
        //                 'famount' => $item->famount,
        //             ];
        //         });

        $data = DB::connection('mysql2')->table('raaohs')
                    ->select('ooes.FACTCODE','ooes.FOOEDESC','ooes.assetaccountcode',
                        'ooes.consotag', 'ooes.ftype2','ooes.fueltag',
                        'ooes.recid', 'raaohs.FFUNCCOD', 'raaohs.FRAOTYPE','raaohs.idprogram',
                        'raaods.famount'
                    )
                    ->when($request->year, function($query, $searchItem)use($request){
                        $query->whereYear('raaods.fdate', $request->year);
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
                    ->map(function($item)use($request, $year_current, $year_next){
                        $year_past = $year_current-1;
                        $past_year = DB::connection('mysql2')
                                        ->table('raaods')
                                        ->where('raaohs.idprogram', $item->idprogram)
                                        ->where('raaohs.FFUNCCOD', $item->FFUNCCOD)
                                        ->where('raaohs.FRAOTYPE', $item->FRAOTYPE)
                                        ->where('raaods.idooe',$item->recid)
                                        ->where('raaods.entrytype', '2')
                                        ->whereYear('raaods.fdate', '=',$year_past)
                                        ->join('raaohs','raaohs.recid','raaods.idraao')
                                        ->sum('raaods.famount');
                        $sem1 = DB::connection('mysql2')
                                        ->table('raaods')
                                        ->where('raaohs.idprogram', $item->idprogram)
                                        ->where('raaohs.FFUNCCOD', $item->FFUNCCOD)
                                        ->where('raaohs.FRAOTYPE', $item->FRAOTYPE)
                                        ->where('raaods.idooe',$item->recid)
                                        ->where('raaods.entrytype', '3')
                                        ->whereMonth('raaods.fdate', '<','7')
                                        ->whereYear('raaods.fdate', '=',$year_current)
                                        ->join('raaohs','raaohs.recid','raaods.idraao')
                                        ->sum('raaods.famount');
                        $sem2 = DB::connection('mysql2')
                                    ->table('raaods')
                                    ->where('raaohs.idprogram', $item->idprogram)
                                    ->where('raaohs.FFUNCCOD', $item->FFUNCCOD)
                                    ->where('raaohs.FRAOTYPE', $item->FRAOTYPE)
                                    ->where('raaods.entrytype', '1')
                                    ->where('raaods.idooe',$item->recid)
                                    ->whereYear('raaods.fdate', '=',$year_current)
                                    ->whereMonth('raaods.fdate', '>','7')
                                    ->join('raaohs','raaohs.recid','raaods.idraao')
                                    ->sum('raaods.famount');
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
                            'sem1'=>$sem1,
                            'sem2'=>$sem2,
                            'famount'=>$item->famount
                        ];
                    });

                    //->groupBy('ooes.recid')
        // $totalCount = $data->count();
        // $uniqueOoesRecidCount = $data->pluck('recid')->unique()->count();
        // dd('totalCount: '.$totalCount.' uniqueOoesRecidCount: '.$uniqueOoesRecidCount);
        return $data;
    }
}
