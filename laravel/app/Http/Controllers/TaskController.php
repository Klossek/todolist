<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Models\Task;
use Exception;

class TaskController extends Controller
{


    public function setComplete(Task $task)
    {

        $task->completed = !$task->completed;
        $task->update();
        return response($task);
    }

    public function showAll()
    {
        return response(Task::all());
    }


    public function create(StoreTaskRequest $request)
    {


        $task = new Task();
        $task->name = $request->name;
        $task->description = $request->description;
        $task->save();

        return response($task);
    }



    public function show(Task $task)
    {


        return response()->json([
            'task' =>  $task->name
        ]);
    }



    public function delete(Task $task)
    {
        $task->delete();
    }
}
