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
use App\Http\Controllers\DivisionController;
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
use App\Http\Controllers\OPCRController;
use App\Http\Controllers\OPCRPAPSController;
use App\Http\Controllers\OutputController;
use App\Http\Controllers\PerformanceController;
use App\Http\Controllers\SuccessIndicatorController;
use App\Http\Controllers\OfficeAccountableController;
use App\Http\Controllers\OfficePerformanceCommitmentRatingController;
use App\Http\Controllers\OfficePerformanceCommitmentRatingListController;
use App\Http\Controllers\RatingController;
use App\Http\Controllers\QualityController;
use App\Http\Controllers\TimelinessController;
use App\Http\Controllers\QualityRemarksController;
use App\Http\Controllers\RatingRemarksController;
use App\Http\Controllers\TimelinessRemarksController;
use App\Http\Controllers\MonitoringController;
use App\Http\Controllers\OpcrAccomplishmentController;
use App\Http\Controllers\OpcrTargetController;
use App\Http\Controllers\AIPController;
use App\Http\Controllers\aip_controller;
use App\Http\Controllers\DailyAccomplishmentController;
use App\Http\Controllers\AddAccomplishmentController;
use App\Http\Controllers\AppropriationController;
use App\Http\Controllers\DivisionOutputController;
use App\Http\Controllers\IndividualFinalOutputController;
use App\Http\Controllers\ObjectOfExpenditureController;
use App\Http\Controllers\SubMfoController;
use Illuminate\Support\Facades\Mail;
use App\Mail\MessageMail;
use App\Models\ImplementationPlan;
use App\Models\IntermediateOutcome;
use App\Models\OfficePerformanceCommitmentRating;
use App\Models\OpcrAccomplishment;
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
        Route::get('/{id}/{ismfo}/strat/mfo',[StrategyController::class,'index']);
        Route::get('/create/{id}/{ismfo}',[StrategyController::class,'create']);
        Route::post('/store',[StrategyController::class,'store']);
        Route::post('/update',[StrategyController::class,'update']);
        Route::delete('/{id}/{idpaps}', [StrategyController::class, 'destroy']);
        Route::get('/{id}/{idinteroutcome}/edit', [StrategyController::class, 'edit']);
        Route::patch('/', [StrategyController::class, 'update']);
    });
    //MFOStrategies
    Route::prefix('/mfostrategies')->group(function(){

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
    //MFO Revision Plans
    Route::prefix('/mforevision')->group(function(){
        Route::get('/{id}',[RevisionPlanController::class,'mfo_index']);
        Route::get('/create/{id}',[RevisionPlanController::class,'mfo_create']);
        Route::post('/store',[RevisionPlanController::class,'mfo_store']);
        Route::get('/view/project/mfo/{id}',[RevisionPlanController::class,'view']);
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
        Route::get('/general/administration/services/{FFUNCCOD}/plan',[RevisionPlanController::class,'gas']);
        Route::get('/general/administration/services/create/{FFUNCCOD}/plan',[RevisionPlanController::class,'gas_create']);
        Route::post('/general/administration/services/{FFUNCCOD}/plan/store',[RevisionPlanController::class,'gas_store']);

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

        //OPCR
        Route::prefix('/OPCRStandard')->group(function(){
        Route::get('/',[OPCRController::class,'index']);
        Route::get('/{idstrat}',[OPCRController::class,'showopcr']);
    });

    //Route::patch('/', [PAPController::class, 'update']);
    Route::prefix('/OPCRpaps')->group(function(){
        Route::get('/direct',[OPCRPAPSController::class,'direct']);
        Route::get('/direct/create',[OPCRPAPSController::class,'direct_create']);
        Route::get('/{id}',[OPCRPAPSController::class,'index']);
        Route::get('/create/{id}',[OPCRPAPSController::class,'create']);
        Route::post('/save',[OPCRPAPSController::class,'save']);
        Route::post('/store',[OPCRPAPSController::class,'store']);
        Route::get('/{id}/{idmfo}/edit', [OPCRPAPSController::class, 'edit']);
        Route::patch('/{id}', [OPCRPAPSController::class, 'update']);
        Route::patch('/update/{id}', [OPCRPAPSController::class, 'updated']);
        Route::delete('/{id}', [OPCRPAPSController::class, 'destroy']);
    });

    Route::prefix('/output')->group(function(){
        Route::get('/{id}',[OutputController::class,'index']);
        Route::get('/create/{id}',[OutputController::class,'create']);
        Route::post('/store',[OutputController::class,'store']);
        Route::get('/{id}/edit', [OutputController::class, 'edit']);
        Route::patch('/{id}', [OutputController::class, 'update']);
        Route::delete('/{id}', [OutputController::class, 'destroy']);
    });

    Route::prefix('/Performance')->group(function(){
        Route::get('/{id}',[PerformanceController::class,'index']);
        Route::get('/create/{id}',[PerformanceController::class,'create']);
        Route::post('/store',[PerformanceController::class,'store']);
        Route::get('/{id}/edit', [PerformanceController::class, 'edit']);
        Route::patch('/{id}', [PerformanceController::class, 'update']);
        Route::delete('/{id}', [PerformanceController::class, 'destroy']);
    });

    Route::prefix('/SuccessIndicator')->group(function(){
        Route::get('/{id}',[SuccessIndicatorController::class,'index']);
        Route::get('/create/{id}',[SuccessIndicatorController::class,'create']);
        Route::post('/store',[SuccessIndicatorController::class,'store']);
        Route::get('/{id}/edit', [SuccessIndicatorController::class, 'edit']);
        Route::patch('/{id}', [SuccessIndicatorController::class, 'update']);
        Route::delete('/{id}', [SuccessIndicatorController::class, 'destroy']);
    });


    Route::prefix('/OfficeAccountable')->group(function(){
        Route::get('/{id}',[OfficeAccountableController::class,'index']);
        Route::get('/create/{id}',[OfficeAccountableController::class,'create']);
        Route::post('/store',[OfficeAccountableController::class,'store']);
        Route::get('/{id}/edit', [OfficeAccountableController::class, 'edit']);
        Route::patch('/{id}', [OfficeAccountableController::class, 'update']);
        Route::delete('/{id}', [OfficeAccountableController::class, 'destroy']);
    });

    Route::prefix('/Rating')->group(function(){
        Route::get('/{id}',[RatingController::class,'index']);
        Route::get('/create/{id}',[RatingController::class,'create']);
        Route::post('/store',[RatingController::class,'store']);
        Route::get('/{id}/edit', [RatingController::class, 'edit']);
        Route::patch('/{id}', [RatingController::class, 'update']);
        Route::delete('/{id}', [RatingController::class, 'destroy']);
    });

    Route::prefix('/Quality')->group(function(){
        Route::get('/{id}',[QualityController::class,'index']);
        Route::get('/create/{id}',[QualityController::class,'create']);
        Route::post('/store',[QualityController::class,'store']);
        Route::get('/{id}/edit', [QualityController::class, 'edit']);
        Route::patch('/{id}', [QualityController::class, 'update']);
        Route::delete('/{id}', [QualityController::class, 'destroy']);
    });

    Route::prefix('/Timeliness')->group(function(){
        Route::get('/{id}',[TimelinessController::class,'index']);
        Route::get('/create/{id}',[TimelinessController::class,'create']);
        Route::post('/store',[TimelinessController::class,'store']);
        Route::get('/{id}/edit', [TimelinessController::class, 'edit']);
        Route::patch('/{id}', [TimelinessController::class, 'update']);
        Route::delete('/{id}', [TimelinessController::class, 'destroy']);
    });

    Route::prefix('/QualityRemarks')->group(function(){
        Route::get('/{id}',[QualityRemarksController::class,'index']);
        Route::get('/create/{id}',[QualityRemarksController::class,'create']);
        Route::post('/store',[QualityRemarksController::class,'store']);
        Route::get('/{id}/edit', [QualityRemarksController::class, 'edit']);
        Route::patch('/{id}', [QualityRemarksController::class, 'update']);
        Route::delete('/{id}', [QualityRemarksController::class, 'destroy']);
    });

    Route::prefix('/RatingRemarks')->group(function(){
        Route::get('/{id}',[RatingRemarksController::class,'index']);
        Route::get('/create/{id}',[RatingRemarksController::class,'create']);
        Route::post('/store',[RatingRemarksController::class,'store']);
        Route::get('/{id}/edit', [RatingRemarksController::class, 'edit']);
        Route::patch('/{id}', [RatingRemarksController::class, 'update']);
        Route::delete('/{id}', [RatingRemarksController::class, 'destroy']);
    });


    Route::prefix('/TimelinessRemarks')->group(function(){
        Route::get('/{id}',[TimelinessRemarksController::class,'index']);
        Route::get('/create/{id}',[TimelinessRemarksController::class,'create']);
        Route::post('/store',[TimelinessRemarksController::class,'store']);
        Route::get('/{id}/edit', [TimelinessRemarksController::class, 'edit']);
        Route::patch('/{id}', [TimelinessRemarksController::class, 'update']);
        Route::delete('/{id}', [TimelinessRemarksController::class, 'destroy']);
    });

    Route::prefix('/Monitoring')->group(function(){
        Route::get('/{id}',[MonitoringController::class,'index']);
        Route::get('/create/{id}',[MonitoringController::class,'create']);
        Route::post('/store',[MonitoringController::class,'store']);
        Route::get('/{id}/edit', [MonitoringController::class, 'edit']);
        Route::patch('/{id}', [MonitoringController::class, 'update']);
        Route::delete('/{id}', [MonitoringController::class, 'destroy']);
    });

    //SubSector
    Route::prefix('/subsector')->group(function(){});

    //DIVISIONS
    Route::prefix('divisions')->group(function(){
        Route::get('/{FFUNCCOD}',[DivisionController::class,'index']);
        Route::get('/create/{FFUNCCOD}',[DivisionController::class,'create']);
        Route::post('/store',[DivisionController::class,'store']);
        Route::get('/{id}/edit', [DivisionController::class, 'edit']);
        Route::patch('/{id}', [DivisionController::class, 'update']);
        Route::delete('/{id}', [DivisionController::class, 'destroy']);
    });

    //Office Performance Commitment Rating Form
    Route::prefix('/opcr/form')->group(function(){
        Route::get('/{opcr_id}/{FFUNCCOD}',[OfficePerformanceCommitmentRatingController::class,'index']);
        Route::get('/create/{FFUNCCOD}',[OfficePerformanceCommitmentRatingController::class,'create']);
        Route::post('/store',[OfficePerformanceCommitmentRatingController::class,'store']);
        Route::get('/{id}/edit', [OfficePerformanceCommitmentRatingController::class, 'edit']);
        Route::patch('/{id}', [OfficePerformanceCommitmentRatingController::class, 'update']);
        Route::delete('/{id}', [OfficePerformanceCommitmentRatingController::class, 'destroy']);
        Route::get('/print/o/p/c/r', [OfficePerformanceCommitmentRatingController::class, 'print']);
    });
    //OPCR List
    Route::prefix('opcrlist')->group(function(){
        Route::get('/',[OfficePerformanceCommitmentRatingListController::class,'direct']);
        Route::get('/{FFUNCCOD}',[OfficePerformanceCommitmentRatingListController::class,'index']);
        Route::get('/create/{FFUNCCOD}',[OfficePerformanceCommitmentRatingListController::class,'create']);
        Route::post('/store',[OfficePerformanceCommitmentRatingListController::class,'store']);
        Route::get('/{id}/edit', [OfficePerformanceCommitmentRatingListController::class, 'edit']);
        Route::patch('/{id}', [OfficePerformanceCommitmentRatingListController::class, 'update']);
        Route::delete('/{id}', [OfficePerformanceCommitmentRatingListController::class, 'destroy']);
    });

    //OPCR Target
    Route::prefix('opcrtarget')->group(function(){
        Route::get('/{opcr_list_id}',[OpcrTargetController::class,'index']);
        Route::get('/create/{opcr_list_id}',[OpcrTargetController::class,'create']);
        Route::post('/store',[OpcrTargetController::class,'store']);
        Route::get('/{opcr_list_id}/edit', [OpcrTargetController::class, 'edit']);
        Route::patch('/', [OpcrTargetController::class, 'update']);
        Route::delete('/{id}', [OpcrTargetController::class, 'destroy']);
    });
    //OPCR Accomplishment
    Route::prefix('opcraccomplishment')->group(function(){
        Route::get('/{opcr_list_id}',[OpcrAccomplishmentController::class,'index']);
        Route::get('/create/{opcr_list_id}',[OpcrAccomplishmentController::class,'create']);
        Route::post('/store',[OpcrAccomplishmentController::class,'store']);
        Route::get('/{opcr_list_id}/edit', [OpcrAccomplishmentController::class, 'edit']);
        Route::patch('/', [OpcrAccomplishmentController::class, 'update']);
        Route::delete('/{id}', [OpcrAccomplishmentController::class, 'destroy']);
    });

    //IPCR List
    Route::prefix('IPCR')->group(function(){
        Route::get('/direct',[OpcrAccomplishmentController::class,'index']);
    });
    //AIP
    Route::prefix('/AIP')->group(function(){
        Route::get('/',[AIPController::class,'index']);
        Route::get('/direct',[AIPController::class,'direct']);
        Route::get('/create/{id}',[AIPController::class,'create']);
        Route::post('/store',[AIPController::class,'store']);
        Route::get('/{id}/edit', [AIPController::class, 'edit']);
        Route::patch('/{id}', [AIPController::class, 'update']);
        Route::delete('/{id}', [AIPController::class, 'destroy']);
    });
    //Appropriations
    Route::prefix('/appropriations')->group(function(){
        Route::get('/{idpaps}',[AppropriationController::class,'index']);
        Route::get('/create/{idpaps}',[AppropriationController::class,'create']);
        Route::post('/store',[AppropriationController::class,'store']);
        Route::get('/{id}/edit',[AppropriationController::class,'edit']);
        Route::patch('/',[AppropriationController::class,'update']);
        Route::delete('/{id}', [AppropriationController::class, 'destroy']);

    });
    Route::prefix('/ooes')->group(function(){
        Route::get('/filtered/ooes',[ObjectOfExpenditureController::class,'filterOOES']);
        //Route::get('/filtered/ooes',[ObjectOfExpenditureController::class,'filterOOEPrograms']);
    });

    Route::prefix('/individual/outputs')->group(function(){
        Route::get('/',[IndividualFinalOutputController::class,'index']);
        Route::get('/create',[IndividualFinalOutputController::class,'create']);
        Route::post('/store',[IndividualFinalOutputController::class,'store']);
        Route::get('/{id}/edit',[IndividualFinalOutputController::class,'edit']);
        Route::patch('/',[IndividualFinalOutputController::class,'update']);
        Route::delete('/{id}', [IndividualFinalOutputController::class, 'destroy']);
        Route::post('/import/file/data', [IndividualFinalOutputController::class, 'importIPCR']);
    });
    Route::prefix('/division_outputs')->group(function(){
        Route::get('/',[DivisionOutputController::class,'index']);
        Route::get('/create',[DivisionOutputController::class,'create']);
        Route::get('/{id}/edit',[DivisionOutputController::class,'edit']);
        Route::post('/store',[DivisionOutputController::class,'store']);
        Route::patch('/',[DivisionOutputController::class,'update']);
        Route::delete('/{id}', [DivisionOutputController::class, 'destroy']);
        Route::get('/get/division_outputs/list',[DivisionOutputController::class,'getDivOutput']);
    });
    Route::prefix('/submfos')->group(function(){
        Route::get('/{idmfo}',[SubMfoController::class,'index']);
        Route::get('/create/{idmfo}',[SubMfoController::class,'create']);
        Route::get('/get/submfo/list',[SubMfoController::class,'getSubMFOs']);
        Route::post('/store',[SubMfoController::class,'store']);
        Route::get('/{id}/edit',[SubMfoController::class,'edit']);
        Route::patch('/',[SubMfoController::class,'update']);
        Route::delete('/{id}', [SubMfoController::class, 'destroy']);
    });

    // Route::prefix('/aip')->group(function(){
    //     Route::get('/{id}',[aip_controller::class,'index']);
    //     Route::get('/create/{id}',[aip_controller::class,'create']);
    //     Route::post('/store',[aip_controller::class,'store']);
    //     Route::get('/{id}/edit', [aip_controller::class, 'edit']);
    //     Route::patch('/{id}', [aip_controller::class, 'update']);
    //     Route::delete('/{id}', [aip_controller::class, 'destroy']);
    // });

    Route::prefix('viewOPCR')->group(function(){
        Route::get('/FFUNCOD',[OPCRController::class,'viewOPCR']);

    });


    Route::prefix('/DailyAccomplishment')->group(function(){
        Route::get('/direct',[DailyAccomplishmentController::class,'direct']);
        Route::get('/direct/create',[DailyAccomplishmentController::class,'direct_create']);
        Route::get('/{id}',[DailyAccomplishmentController::class,'index']);
        Route::get('/create/{id}',[DailyAccomplishmentController::class,'create']);
        Route::post('/save',[DailyAccomplishmentController::class,'save']);
        Route::post('/store',[DailyAccomplishmentController::class,'store']);
        Route::get('/{id}/{idmfo}/edit', [DailyAccomplishmentController::class, 'edit']);
        Route::patch('/{id}', [DailyAccomplishmentController::class, 'update']);
        Route::patch('/update/{id}', [DailyAccomplishmentController::class, 'updated']);
        Route::delete('/{id}', [DailyAccomplishmentController::class, 'destroy']);
    });

    Route::prefix('/AddAccomplishment')->group(function(){
        Route::get('/',[AddAccomplishmentController::class,'index']);
        Route::get('/create',[AddAccomplishmentController::class,'create']);
        Route::post('/store',[AddAccomplishmentController::class,'store']);
        Route::get('/{id}/edit', [AddAccomplishmentController::class, 'edit']);
        Route::patch('/{id}', [AddAccomplishmentController::class, 'update']);
        Route::delete('/{id}', [AddAccomplishmentController::class, 'destroy']);
    });

});


Route::prefix('printOPCR')->group(function(){
    Route::get('/FFUNCOD',[OPCRController::class,'OPCRprint']);
    Route::get('/FFUNCOD',[OPCRController::class,'MFO']);
    Route::get('/PAPS',[OPCRController::class,'PAPS']);
    Route::get('/Rating',[OPCRController::class,'Rating']);
    Route::get('/Quality',[OPCRController::class,'Quality']);
    Route::get('/Timeliness',[OPCRController::class,'Timeliness']);
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
    Route::get('/LogFrame/{FFUNCCOD}',[LogFrameController::class,'printLog']);

});
Route::prefix('opcr/print')->group(function(){
    Route::get('/rating/form', [OfficePerformanceCommitmentRatingController::class,'print_class']);
    Route::get('/rating', [OfficePerformanceCommitmentRatingController::class,'print_class3']);
    Route::get('/main', [OfficePerformanceCommitmentRatingController::class,'print_main']);
    Route::get('/mfo', [OfficePerformanceCommitmentRatingController::class,'print_mfo']);
    Route::get('/paps', [OfficePerformanceCommitmentRatingController::class,'print_paps']);
    Route::get('/targets', [OfficePerformanceCommitmentRatingController::class,'print_success_targets']);
    Route::get('/rating', [OfficePerformanceCommitmentRatingController::class,'print_rating']);
    Route::get('/office', [OfficePerformanceCommitmentRatingController::class,'print_office']);
});
Route::get('test/opcr_id/{opcr_id}',[OfficePerformanceCommitmentRatingListController::class,'getRating']);
Route::prefix('printlog')->group(function(){
    Route::get('/SocGoal',[LogFrameController::class,'SocGoal']);
    Route::get('/logframeMFO',[LogFrameController::class,'mfo']);
    Route::get('/logframePAPS',[LogFrameController::class,'paps']);
    Route::get('/logframeSocGoals',[LogFrameController::class,'socgoals']);
    Route::get('/logframeSectoral',[LogFrameController::class,'sectoral']);
    Route::get('/logframeOrganizational',[LogFrameController::class,'organizational']);
    Route::get('/logframeSectorsFiltered',[LogFrameController::class,'sectorFiltered']);
    Route::get('/logframe/Sectors',[LogFrameController::class,'sectoralClassified']);

    Route::get('/{FFUNCCOD}',[LogFrameController::class,'printlogpublic']);

});
Route::prefix('daily_accomplishments/')->group(function(){
    Route::get('main',[DailyAccomplishmentController::class,'main_accomplishment']);
    Route::get('mfos',[DailyAccomplishmentController::class,'mfo_accomplishment']);
    Route::get('paps',[DailyAccomplishmentController::class,'paps_accomplishment']);
    Route::get('daily',[DailyAccomplishmentController::class,'daily_accomplishment']);
});
Route::prefix('hgdg/print')->group(function(){
    Route::get('checklist',[HGDGScoreController::class,'getChecklist']);
    Route::get('question',[HGDGScoreController::class,'getQuestions']);
});

Route::prefix('printLBP')->group(function(){
    Route::get('/MFO',[AIPController::class,'MFO']);
    Route::get('/PAPS',[AIPController::class,'PAPS']);


});
Route::prefix('print/appropriations')->group(function(){
    Route::get('/',[AppropriationController::class,'main']);
    Route::get('/paps/types',[AppropriationController::class,'paps_types']);
    Route::get('/paps',[AppropriationController::class,'paps']);
    Route::get('/paps/categories/list',[AppropriationController::class,'paps_categories']);
    Route::get('/paps/appropriations/print/all',[AppropriationController::class,'appropriations']);
});

