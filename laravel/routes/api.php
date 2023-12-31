<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\TaskController;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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


/*
|--------------------------------------------------------------------------
| Tasks Routes
|--------------------------------------------------------------------------
|
|
*/

Route::get('/tasks/{task}', [TaskController::class, 'show']);
Route::get('/tasks', [TaskController::class, 'showAll']);
Route::post('/tasks/create', [TaskController::class, 'create']);
Route::delete('/tasks/{task}', [TaskController::class, 'delete']);
Route::post('/tasks/set-complete/{task}', [TaskController::class, 'setComplete']);







/*
|--------------------------------------------------------------------------
| Login Routes
|--------------------------------------------------------------------------
|
|
*/
Route::post('/login', [LoginController::class, 'authenticate']);
Route::post('/logout', [LoginController::class, 'logout']);
Route::middleware(['auth:sanctum'])->post('/user', function (Request $request) {
    return $request->user();
});
Route::post('/greeting', function (Request $request) {
    $user = $request->user();
    return response()->json(["das" => $user]);
});
Route::get('/greeting', function (Request $request) {
    $user =  $request->user();

    return response()->json([
        'user' => $user,
        'state' => 'CA',
    ]);
});
