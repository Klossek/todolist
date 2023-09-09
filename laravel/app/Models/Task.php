<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Task extends Model
{
    use HasFactory;

    /**
     * Get the user that is assigned to the task.
     */
    public function post(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
