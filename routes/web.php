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
use App\Http\Controllers\IntermediateOutcomeController;
use App\Http\Controllers\MFOController;
use App\Http\Controllers\OutcomeController;
use App\Http\Controllers\PAPController;
use App\Http\Controllers\RAAOController;
use App\Http\Controllers\PlacesController;
use App\Http\Controllers\StrategyController;
use Illuminate\Support\Facades\Mail;
use App\Mail\MessageMail;
use App\Models\IntermediateOutcome;
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
        Route::get('/{raao_id}/{year}/create', [TargetController::class, 'create']);
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

    //Outcome
    Route::prefix('/outcome')->group(function(){
        ///outcome/${dat.id}/edit
        Route::get('/',[OutcomeController::class,'index']);
        Route::get('/create',[OutcomeController::class,'create']);
        Route::post('/store',[OutcomeController::class,'store']);
        Route::get('/{id}/edit', [OutcomeController::class, 'edit']);
        Route::patch('/{id}', [OutcomeController::class, 'update']);
        Route::delete('/{id}', [OutcomeController::class, 'destroy']);
    });

    //Intermediate Outcomes
    ///inter_outcome/${dat.id}
    Route::prefix('/inter_outcome')->group(function(){
        //create/${idoutcome}
        //this.$inertia.delete("/inter_outcome/" + id+"/"+this.idoutcome);
        Route::get('/{id}',[IntermediateOutcomeController::class,'index']);
        Route::get('/create/{id}',[IntermediateOutcomeController::class,'create']);
        Route::post('/store',[IntermediateOutcomeController::class,'store']);
        Route::delete('/{id}/{idoutcome}', [IntermediateOutcomeController::class, 'destroy']);
        Route::get('/{id}/{idoutcome}/edit', [IntermediateOutcomeController::class, 'edit']);
        Route::patch('/', [IntermediateOutcomeController::class, 'update']);
    });

    Route::prefix('/strategies')->group(function(){
        Route::get('/{id}',[StrategyController::class,'index']);
        Route::get('/create/{id}',[StrategyController::class,'create']);
        Route::post('/store',[StrategyController::class,'store']);
        Route::delete('/{id}/{idoutcome}', [StrategyController::class, 'destroy']);
        Route::get('/{id}/{idinteroutcome}/edit', [StrategyController::class, 'edit']);
        Route::patch('/', [StrategyController::class, 'update']);
    });

    Route::prefix('/mfos')->group(function(){
        Route::get('/{id}',[MFOController::class,'index']);
        Route::get('/create/{id}',[MFOController::class,'create']);
        Route::post('/store',[MFOController::class,'store']);
        Route::get('/{id}/{idinteroutcome}/edit', [MFOController::class, 'edit']);
        Route::patch('/', [MFOController::class, 'update']);
        Route::delete('/{id}/{idoutcome}', [MFOController::class, 'destroy']);
    });
    //Route::patch('/', [PAPController::class, 'update']);
    Route::prefix('/paps')->group(function(){
        Route::get('/{id}',[PAPController::class,'index']);
        Route::get('/create/{id}',[PAPController::class,'create']);
        Route::post('/store',[PAPController::class,'store']);
        Route::get('/{id}/{idmfo}/edit', [PAPController::class, 'edit']);
        Route::patch('/{id}', [PAPController::class, 'update']);
        Route::delete('/{id}/{idoutcome}', [PAPController::class, 'destroy']);
    });
    //
});
Route::prefix('print')->group(function(){
    Route::get('/RaaoData2',[RAAOController::class,'raao_jasper']);
    Route::get('/RaaoData/xyz',[RAAOController::class,'rrr']);
    Route::get('/printRaao',[RAAOController::class,'rrr']);
    Route::get('/RaaoDataM',[RAAOController::class,'raao_jasper_3']);
    Route::get('/RaaoData2/target_qty1',[RAAOController::class,'raao_jasper_tgqty1']);
    Route::get('/RaaoData/{year?}/{userType?}/{lgu?}/{dept?}');
    Route::get('/PPA_Data/{year?}/{userType?}/{lgu?}/{dept?}',function(){
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
                            ->leftJoin(DB::raw('my_raao_new.targets t'),'t.idraao','=','b.idraao')
                            ->leftJoin(DB::raw('my_raao_new.indicators i'),'t.idindicator','=','i.id')
                            ->get();

        $userType=request('userType');

        $ppa_desc=$data_new->pluck('fraodesc');
        $total_cost = $data_new->pluck('appropriation');
        $indicator = $data_new->pluck('description');
        $target = $data_new->pluck('target_qty');
        $target_qty1 = $data_new->pluck('target_qty1');
        $target_qty2 = $data_new->pluck('target_qty2');
        $target_qty3 = $data_new->pluck('target_qty3');
        $target_qty4 = $data_new->pluck('target_qty4');
        return [
                    'userType'=>$userType,
                    'lgu'=>request('lgu'),
                    'dept'=>request('dept'),
                    'dept_head'=>'Department Head Name',
                    'lce'=>'Local Chief Executive',
                    'ppa_desc'=>$ppa_desc,
                    'total_cost'=>$total_cost,
                    'indicator'=>$indicator,
                    'target'=>$target,
                    'target_qty1'=>$target_qty1,
                    'target_qty2'=>$target_qty2,
                    'target_qty3'=>$target_qty3,
                    'target_qty4'=>$target_qty4,
                ];
    });
});


