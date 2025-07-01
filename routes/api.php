<?php

use App\Http\Controllers\RevisionPlanController;
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
});
