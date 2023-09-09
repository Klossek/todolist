<?php

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

Route::get('/tasks/{id}', [TaskController::class, 'show']);
Route::get('/tasks', [TaskController::class, 'showAll']);
Route::post('/tasks/create', [TaskController::class, 'create']);
Route::delete('/tasks/delete/{id}', [TaskController::class, 'delete']);






Route::middleware(['auth:sanctum'])->post('/user', function (Request $request) {
    return $request->user();
});


Route::post('/logout', function (Request $request) {
    Auth::logout();

    $request->session()->invalidate();

    //$request->session()->regenerateToken();
    return response('logged out', 200)
        ->header('Content-Type', 'text/plain');
});


Route::post('/greeting', function (Request $request) {

    $user = $request->user();
    return  var_dump($user);

    return response()->json([
        'user' => $user,
        'state' => 'CA',
    ]);
});
