<?php

// use App\Http\Controllers\FileHandleController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

//use App\Http\Controllers\ImportDataController;
//use App\Http\Controllers\ReportController;
use App\Http\Controllers\DashBoardController;
// use App\Http\Controllers\EducationController;
// use App\Http\Controllers\GovernmentController;
// use App\Http\Controllers\EconomicController;
// use App\Http\Controllers\HealthController;
// use App\Http\Controllers\OtherController;
use App\Http\Controllers\AuthenticationController;
// use App\Http\Controllers\TimeSheetController;
use App\Http\Controllers\AccomplishmentController;
use App\Http\Controllers\TargetController;
use App\Http\Controllers\IndicatorController;
use App\Http\Controllers\RAAOController;
use App\Http\Controllers\PlacesController;
use Illuminate\Support\Facades\Mail;
use App\Mail\MessageMail;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Carbon\Carbon;
Auth::routes(['verify'=>true]);

Route::middleware('auth')->group(function() {
    Route::prefix('/')->group(function() {
        Route::get('/', [DashBoardController::class, 'index']);
    });

    Route::prefix('/home')->group(function() {
        Route::get('/', [DashBoardController::class, 'index']);
    });



    Route::prefix('/accomplishments')->group(function(){
        Route::get('/',[AccomplishmentController::class,'index']);
        Route::get('/{raao_id}/create', [AccomplishmentController::class, 'create']);
        Route::get('/{id}/list', [AccomplishmentController::class, 'list']);
        Route::post('/store', [AccomplishmentController::class, 'store']);
        Route::get('/{id}/{target_id}/edit', [AccomplishmentController::class, 'edit']);
        Route::patch('/{id}',[AccomplishmentController::class,'update']);
        ///accomplishments/validation
        /*
            if (this.editData !== undefined) {
                    this.form.patch("/accomplishments/raao/" + this.form.id, this.form);
                } else {
                    this.form.id=null;
                    this.form.post("/accomplishments/store/raao/", this.form);
                }
        */
        //accomplishment/{id}/raao/{raao_id}/edit
        Route::post('/validation',[AccomplishmentController::class,'validation']);
        Route::delete('/{id}/{target_id}', [AccomplishmentController::class, 'destroy']);
        Route::get('/{raao_id}/raao/list',[AccomplishmentController::class,'listraao']);
        Route::get('/raao/{raao_id}/create',[AccomplishmentController::class,'createFromRaao']);
        Route::post('/store/raao', [AccomplishmentController::class, 'storeraao']);
        Route::get('/{id}/raao/{raao_id}/edit',[AccomplishmentController::class,'editfromraao']);
        Route::delete('/{id}/raao/{raao_id}/delete',[AccomplishmentController::class,'deletefromraao']);
        Route::patch('/raao/{id}',[AccomplishmentController::class,'updateraao']);
    });

    //Targets
    Route::prefix('/targets')->group(function(){
        Route::get('/',[TargetController::class,'index']);
        Route::get('/{id}/list',[TargetController::class,'list']);
        Route::patch('/{id}',[TargetController::class,'update']);
        Route::post('/store', [TargetController::class, 'store']);
        Route::delete('/{id}/{raao_id}', [TargetController::class, 'destroy']);
        Route::get('/{raao_id}/create', [TargetController::class, 'create']);
        Route::get('/{id}/edit', [TargetController::class, 'edit']);
        Route::get('/return/{target_id}',[TargetController::class,'ret']);
    });

    //Indicators
    Route::prefix('/indicators')->group(function(){
        Route::get('/',[IndicatorController::class,'index']);
        Route::get('/create',[IndicatorController::class,'create']);
        Route::post('/store',[IndicatorController::class,'store']);
        Route::delete('/{id}/delete', [IndicatorController::class, 'destroy']);
        Route::get('/{id}/edit', [IndicatorController::class, 'edit']);
        Route::patch('/{id}',[IndicatorController::class,'update']);
        Route::post('/checkUse',[IndicatorController::class,'checkUse']);
    });

    //RAAO
    Route::prefix('/raao')->group(function(){
        Route::get('/',[RAAOController::class,'index']);
    });

    //Places
    Route::prefix('/places')->group(function(){
        Route::get('/',[PlacesController::class,'showPlaces']);
        Route::post('/bar',[PlacesController::class,'getBarangays']);
    });

});
Route::prefix('print')->group(function(){
    Route::get('/RaaoData/{year?}/{userType?}/{lgu?}/{dept?}',function(){
        //http://192.168.6.44:8000/print/RaaoData?year=2020&userType=admin&lgu=Nabunturan&dept=PICTO
        $today = Carbon::now();
        $year = ''.$today->year.'';
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
                                        'b.idraao',
                                        't.target_qty',
                                        't.target_qty1',
                                        't.target_qty2',
                                        't.target_qty3',
                                        't.target_qty4',
                                        't.idraao',
                                        't.description',
                                        'i.description',
                                        DB::raw('(100*(b.obligations/b.appropriation)) as utilization'))
                            ->leftJoin(DB::raw('(select idraao,sum(if(entrytype=\'1\', famount,0)) as appropriation ,sum(if(entrytype=\'3\', famount,0)) as obligations from raaods group by idraao) b'),'a.recid','=','b.idraao')
                            ->Join(DB::raw('my_raao_new.targets t'),'t.idraao','=','b.idraao')
                            ->Join(DB::raw('my_raao_new.indicators i'),'t.idindicator','=','i.id')
                            ->get();

        $userType=request('userType');
        return [
                    'userType'=>$userType,
                    'lgu'=>request('lgu'),
                    'dept'=>request('dept'),
                    'dept_head'=>'Department Head Name',
                    'lce'=>'Local Chief Executive',
                    'data'=>$data_new
                ];
    });
});


