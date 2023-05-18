<?php

// use App\Http\Controllers\FileHandleController;
use App\Http\Controllers\ELAController;
use App\Http\Controllers\SDGController;
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
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\BudgetRequirementController;
use App\Http\Controllers\TargetController;
use App\Http\Controllers\IndicatorController;
use App\Http\Controllers\IntermediateOutcomeController;
use App\Http\Controllers\MFOController;
use App\Http\Controllers\OutcomeController;
use App\Http\Controllers\PAPController;
use App\Http\Controllers\RAAOController;
use App\Http\Controllers\PlacesController;
use App\Http\Controllers\StrategyController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\SectoralController;
use App\Http\Controllers\ChiefAgendaController;
use App\Http\Controllers\EconomicAgendaController;
use App\Http\Controllers\ImplementationPlanController;
use App\Http\Controllers\LogFrameController;
use App\Http\Controllers\ProjectProfileController;
use App\Http\Controllers\RAController;
use App\Http\Controllers\RevisionPlanController;
use App\Http\Controllers\SocietalGoalController;
use App\Http\Controllers\IssueController;
use App\Http\Controllers\HGDGChecklistController;
use App\Http\Controllers\HGDGQuestionController;
use App\Http\Controllers\HGDGScoreController;
use App\Http\Controllers\ImplementingTeamController;
use App\Http\Controllers\MonitoringAndEvaluationController;
use App\Http\Controllers\RiskManangementController;
use App\Http\Controllers\TeamPlanController;
use App\Http\Controllers\SignatoryController;
use App\Http\Controllers\UserOfficeController;
use Illuminate\Support\Facades\Mail;
use App\Mail\MessageMail;
use App\Models\ImplementationPlan;
use App\Models\IntermediateOutcome;
use App\Models\UserOffice;
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

    //UserOffice
    Route::prefix('/office')->group(function(){
        Route::get('/', [UserOfficeController::class, 'create']);
        Route::post('/store', [UserOfficeController::class, 'store']);
        Route::get('/{id}/edit', [UserOfficeController::class, 'edit']);
        Route::patch('/', [UserOfficeController::class, 'update']);
        Route::delete('/', [UserOfficeController::class, 'destroy']);
    });
    //Accomplishments
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

        Route::get('/{imp_id}/implementation',[TargetController::class,'index_i']);
        Route::get('/{imp_id}/implementation/add',[TargetController::class,'create_i']);
        Route::post('/{imp_id}/implementation/store',[TargetController::class,'store_i']);
        Route::get('/{imp_id}/implementation/{id}/edit',[TargetController::class,'edit_i']);
        Route::patch('/{imp_id}/implementation/update',[TargetController::class,'update_i']);
        Route::post('/{imp_id}/implementation/delete/{id}/destroy',[TargetController::class,'destroy_i']);
    });

    //Organization
    Route::prefix('/Organization')->group(function(){
        Route::get('/',[OrganizationController::class,'index']);
        Route::get('/create',[OrganizationController::class,'create']);
        Route::post('/',[OrganizationController::class,'store']);
        Route::get('/{id}/edit', [OrganizationController::class, 'edit']);
        Route::patch('/{id}', [OrganizationController::class, 'update']);
        Route::delete('/{id}', [OrganizationController::class, 'destroy']);
    });

     //SDG
     Route::prefix('/SDG')->group(function(){
        Route::get('/',[SDGController::class,'index']);
        Route::get('/create',[SDGController::class,'create']);
        Route::post('/',[SDGController::class,'store']);
        Route::get('/{id}/edit', [SDGController::class, 'edit']);
        Route::patch('/{id}', [SDGController::class, 'update']);
        Route::delete('/{id}', [SDGController::class, 'destroy']);
    });

     //ELA
     Route::prefix('/ELA')->group(function(){
        Route::get('/',[ELAController::class,'index']);
        Route::get('/create',[ELAController::class,'create']);
        Route::post('/',[ELAController::class,'store']);
        Route::get('/{id}/edit', [ELAController::class, 'edit']);
        Route::patch('/{id}', [ELAController::class, 'update']);
        Route::delete('/{id}', [ELAController::class, 'destroy']);
    });

     //Research Agenda
     Route::prefix('/ResearchAgenda')->group(function(){
        Route::get('/',[RAController::class,'index']);
        Route::get('/create',[RAController::class,'create']);
        Route::post('/',[RAController::class,'store']);
        Route::get('/{id}/edit', [RAController::class, 'edit']);
        Route::patch('/{id}', [RAController::class, 'update']);
        Route::delete('/{id}', [RAController::class, 'destroy']);
    });
     //Sectoral
     Route::prefix('/Sectoral')->group(function(){
        Route::get('/',[SectoralController::class,'index']);
        Route::get('/create',[SectoralController::class,'create']);
        Route::post('/',[SectoralController::class,'store']);
        Route::get('/{id}/edit', [SectoralController::class, 'edit']);
        Route::patch('/{id}', [SectoralController::class, 'update']);
        Route::delete('/{id}', [SectoralController::class, 'destroy']);
    });

    //Societal
    Route::prefix('/Societal')->group(function(){
        Route::get('/',[SocietalGoalController::class,'index']);
        Route::get('/create',[SocietalGoalController::class,'create']);
        Route::post('/',[SocietalGoalController::class,'store']);
        Route::get('/{id}/edit', [SocietalGoalController::class, 'edit']);
        Route::patch('/{id}', [SocietalGoalController::class, 'update']);
        Route::delete('/{id}', [SocietalGoalController::class, 'destroy']);
    });

    //Issues
    Route::prefix('/Issues')->group(function(){
        Route::get('/',[IssueController::class,'index']);
        Route::get('/create',[IssueController::class,'create']);
        Route::post('/',[IssueController::class,'store']);
        Route::get('/{id}/edit', [IssueController::class, 'edit']);
        Route::patch('/{id}', [IssueController::class, 'update']);
        Route::delete('/{id}', [IssueController::class, 'destroy']);
    });

     //ChiefAgenda
     Route::prefix('/ChiefAgenda')->group(function(){
        Route::get('/',[ChiefAgendaController::class,'index']);
        Route::get('/create',[ChiefAgendaController::class,'create']);
        Route::post('/',[ChiefAgendaController::class,'store']);
        Route::get('/{id}/edit', [ChiefAgendaController::class, 'edit']);
        Route::patch('/{id}', [ChiefAgendaController::class, 'update']);
        Route::delete('/{id}', [ChiefAgendaController::class, 'destroy']);
    });

     //Eight Point Socio
     Route::prefix('/EconomicAgenda')->group(function(){
        Route::get('/',[EconomicAgendaController::class,'index']);
        Route::get('/create',[EconomicAgendaController::class,'create']);
        Route::post('/',[EconomicAgendaController::class,'store']);
        Route::get('/{id}/edit', [EconomicAgendaController::class, 'edit']);
        Route::patch('/{id}', [EconomicAgendaController::class, 'update']);
        Route::delete('/{id}', [EconomicAgendaController::class, 'destroy']);
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
    //Strategies
    Route::prefix('/strategies')->group(function(){
        Route::get('/{id}',[StrategyController::class,'index']);
        Route::get('/create/{id}',[StrategyController::class,'create']);
        Route::post('/store',[StrategyController::class,'store']);
        Route::post('/update',[StrategyController::class,'update']);
        Route::delete('/{id}/{idpaps}', [StrategyController::class, 'destroy']);
        Route::get('/{id}/{idinteroutcome}/edit', [StrategyController::class, 'edit']);
        Route::patch('/', [StrategyController::class, 'update']);
    });
    //Activities
    Route::prefix('/activities')->group(function(){
        Route::get('/{idstrat}', [ActivityController::class,'index']);
        Route::get('/create/{id}',[ActivityController::class,'create']);
        Route::post('/store',[ActivityController::class,'store']);
        Route::delete('/{id}/{strategy_id}', [ActivityController::class, 'destroy']);
        Route::get('/{id}/{strategy_id}/edit', [ActivityController::class, 'edit']);
        Route::patch('/', [ActivityController::class, 'update']);
    });
    //LOGFRAME
    Route::prefix('/logframe')->group(function(){
        Route::get('/',[LogFrameController::class,'index']);
        Route::get('/{idstrat}',[LogFrameController::class,'showlog']);
    });
    //MFO
    Route::prefix('/mfos')->group(function(){
        Route::get('/direct',[MFOController::class,'direct']);
        Route::get('/add',[MFOController::class,'add']);
        Route::get('/create',[MFOController::class,'create']);
        Route::post('/store',[MFOController::class,'store']);
        Route::get('/{id}/edit', [MFOController::class, 'edit']);
        Route::patch('/', [MFOController::class, 'update']);
        Route::delete('/{id}/{idoutcome}', [MFOController::class, 'destroy']);
        Route::get('/{id}',[MFOController::class,'index']);
    });
    //Route::patch('/', [PAPController::class, 'update']);
    Route::prefix('/paps')->group(function(){
        Route::get('/direct',[PAPController::class,'direct']);
        Route::get('/direct/create',[PAPController::class,'direct_create']);
        Route::get('/{id}',[PAPController::class,'index']);
        Route::get('/create/{id}',[PAPController::class,'create']);
        Route::post('/save',[PAPController::class,'save']);
        Route::post('/store',[PAPController::class,'store']);
        Route::get('/{id}/{idmfo}/edit', [PAPController::class, 'edit']);
        Route::patch('/{id}', [PAPController::class, 'update']);
        Route::patch('/update/{id}', [PAPController::class, 'updated']);
        Route::delete('/{id}', [PAPController::class, 'destroy']);
    });
    //Project Profile
    Route::prefix('/projectprofile')->group(function(){
        Route::get('/',[ProjectProfileController::class,'index']);
        Route::get('/create',[ProjectProfileController::class,'create']);
    });
    //Revision Plan
    Route::prefix('/revision')->group(function(){
        Route::get('/{id}',[RevisionPlanController::class,'index']);
        Route::get('/create/{id}',[RevisionPlanController::class,'create']);
        Route::post('/store',[RevisionPlanController::class,'store']);
        Route::get('/view/project/paps/{id}',[RevisionPlanController::class,'view']);
    });
    //Budget
    Route::prefix('/budget')->group(function(){
        Route::get('/{id}',[BudgetRequirementController::class,'index']);
        Route::get('/create/{idrev}',[BudgetRequirementController::class,'create']);
        Route::post('/store',[BudgetRequirementController::class,'store']);
        Route::get('/edit/{idbudget}',[BudgetRequirementController::class,'edit']);
        Route::delete('/{id}/{idbudget}', [BudgetRequirementController::class, 'destroy']);
        Route::patch('/update/{idrev}', [BudgetRequirementController::class, 'update']);
    });
    //testing helpers
    Route::get('test-helper', [BudgetRequirementController::class, 'getFirstLastName']);
    //Implementation Plan
    Route::prefix('/implementation')->group(function(){
        Route::get('/{id}',[ImplementationPlanController::class,'index']);
        Route::get('/create/{idrev}',[ImplementationPlanController::class,'create']);
        Route::post('/store',[ImplementationPlanController::class,'store']);
        Route::get('/edit/{id}',[ImplementationPlanController::class,'edit']);
        Route::delete('/{id}', [ImplementationPlanController::class, 'destroy']);
        Route::patch('/update/{idrev}', [ImplementationPlanController::class, 'update']);
        //implementation/create/activity/${dat.id}
        Route::get('/create/activity/{idstrat}/{idrev_plan}',[ImplementationPlanController::class,'act_create']);
        Route::get('/edit/activity/{id}',[ImplementationPlanController::class,'act_edit']);
    });

    //hgdg_checklist
    Route::prefix('/HGDGChecklist')->group(function(){
        Route::get('/',[HGDGChecklistController::class,'index']);
        Route::get('/create',[HGDGChecklistController::class,'create']);
        Route::post('/',[HGDGChecklistController::class,'store']);
        Route::get('/{id}/edit', [HGDGChecklistController::class, 'edit']);
        Route::patch('/{id}', [HGDGChecklistController::class, 'update']);
        Route::delete('/{id}', [HGDGChecklistController::class, 'destroy']);
    });

    Route::prefix('/HGDGScore')->group(function(){
        Route::get('/{idrevplan}',[HGDGScoreController::class,'index']);
        Route::get('/store/hgdg',[HGDGScoreController::class,'store']);

    });

    //hgdg_questions
    Route::prefix('/HGDGQuestions')->group(function(){
        Route::get('/{checklist_id}',[HGDGQuestionController::class,'index']);
        Route::get('/create/{checklist_id}',[HGDGQuestionController::class,'create']);
        Route::post('/store',[HGDGQuestionController::class,'store']);
        Route::get('/{id}/edit', [HGDGQuestionController::class, 'edit']);
        Route::patch('/{id}', [HGDGQuestionController::class, 'update']);
        Route::delete('/delete/{id}', [HGDGQuestionController::class, 'destroy']);
        //Subquestions
        Route::get('/create/subquestions/{checklist_id}/{question_id}',[HGDGQuestionController::class,'subcreate']);
    });

     //Implementing
     Route::prefix('/ImplementingTeam')->group(function(){
        Route::get('/',[ImplementingTeamController::class,'index']);
        Route::get('/create',[ImplementingTeamController::class,'create']);
        Route::post('/',[ImplementingTeamController::class,'store']);
        Route::get('/{id}/edit', [ImplementingTeamController::class, 'edit']);
        Route::patch('/{id}', [ImplementingTeamController::class, 'update']);
        Route::delete('/{id}', [ImplementingTeamController::class, 'destroy']);
    });
    //Revision PLan Implementing Team
    Route::prefix('/team')->group(function(){
        Route::get('/{revid}/revision/plan/team',[TeamPlanController::class,'index']);
        Route::get('/create/{revid}',[TeamPlanController::class,'create']);
        Route::post('/',[TeamPlanController::class,'store']);
        Route::get('/{id}/edit', [TeamPlanController::class, 'edit']);
        Route::patch('/{id}', [TeamPlanController::class, 'update']);
        Route::delete('/{id}', [TeamPlanController::class, 'destroy']);
    });
    //Evaluation Mechanism Tool
    Route::prefix('/EvaluationMechanismTool')->group(function(){
        Route::get('/{id}',[MonitoringAndEvaluationController::class,'index']);
        Route::get('/create/{id}',[MonitoringAndEvaluationController::class,'create']);
        Route::post('/',[MonitoringAndEvaluationController::class,'store']);
        Route::get('/{id}/edit', [MonitoringAndEvaluationController::class, 'edit']);
        Route::patch('/{id}', [MonitoringAndEvaluationController::class, 'update']);
        Route::delete('/{id}', [MonitoringAndEvaluationController::class, 'destroy']);
    });

    //Risk Management
    Route::prefix('/RiskManagement')->group(function(){
        Route::get('/{revid}',[RiskManangementController::class,'index']);
        Route::get('/create/{revid}',[RiskManangementController::class,'create']);
        Route::post('/store',[RiskManangementController::class,'store']);
        Route::get('/{id}/edit', [RiskManangementController::class, 'edit']);
        Route::patch('/{id}', [RiskManangementController::class, 'update']);
        Route::delete('/{id}', [RiskManangementController::class, 'destroy']);
     });

        //Signatories
        Route::prefix('/Signatories')->group(function(){
            Route::get('/{revid}',[SignatoryController::class,'index']);
            Route::get('/create/{revid}',[SignatoryController::class,'create']);
            Route::post('/store',[SignatoryController::class,'store']);
            Route::get('/{id}/edit', [SignatoryController::class, 'edit']);
            Route::patch('/{id}', [SignatoryController::class, 'update']);
            Route::delete('/{id}', [SignatoryController::class, 'destroy']);
         });

    //SubSector
    Route::prefix('/subsector')->group(function(){});
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
    Route::get('/jasadmin',[RAAOController::class,'raao_jasper_admin']);
    Route::get('/jasuser',[RAAOController::class,'raao_jasper_user']);
});
