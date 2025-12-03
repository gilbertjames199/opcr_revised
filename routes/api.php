<?php

use App\Http\Controllers\AIPController;
use App\Http\Controllers\RevisionPlanController;
use App\Http\Controllers\BudgetRequirementController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('api_ppa')->group(function () {
    Route::get('/', [RevisionPlanController::class, 'api_ppa']);
    Route::get('/aip', [RevisionPlanController::class, 'aip_api']);
    Route::get('/print/aip', [RevisionPlanController::class, 'print_aip']);

});

Route::prefix('/project/profile/api')->group(function(){
    Route::get('/',[RevisionPlanController::class, 'ipp']);
    Route::get('/list',[RevisionPlanController::class, 'list']);
    Route::get('/comprehensive/workplan',[RevisionPlanController::class, 'workplan']);
    Route::get('/implementation/schedule/workplan',[RevisionPlanController::class, 'imp_schedule']);
    Route::get('/implementation/schedule/outputs/outcome',[RevisionPlanController::class, 'getCombinedExpected']);
    Route::get('/implementation/schedule/activity',[RevisionPlanController::class, 'getActivity']);
    Route::get('/implementation/schedule/budgetary_requirements',[RevisionPlanController::class, 'getbudget']);
    Route::get('/implementation/schedule/risk_management',[RevisionPlanController::class, 'getActivity']);
    // Route::get('/implementation/schedule/activity',[RevisionPlanController::class, 'getActivity']);
    // Route::get('/implementation/schedule/activity',[RevisionPlanController::class, 'getActivity']);
    // Route::get('/implementation/schedule/activity',[RevisionPlanController::class, 'getActivity']);
});
Route::prefix('budget/requirements')->group(function(){
    Route::get('/categories',[BudgetRequirementController::class, 'getbudgetCategories']);
    Route::get('/details',[BudgetRequirementController::class, 'getbudgetDetails']);
});
Route::prefix('/aip/summaries')->group(function(){
    Route::get('/',[AIPController::class, 'summarize_ipp']);
});
