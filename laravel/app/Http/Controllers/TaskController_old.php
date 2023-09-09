<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function show()
    {
        return response()->json([
            'task' => 'My Task',
        ]);
    }

    public function showAll()
    {
        return response()->json([
            'task' => 'My Task',
        ]);
    }

    public function create()
    {

        $flight = new Task();

        $flight->name = $request->name;

        $flight->save();
        return response()->json([
            'task' => 'created',
        ]);
    }

    public function delete()
    {
        return response()->json([
            'task' => 'deleted',
        ]);
    }
}
