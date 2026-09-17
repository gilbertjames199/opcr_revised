<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StrategyActivityRequest extends Model
{
    use HasFactory;

    protected $connection = 'mysql';
    protected $table = 'strategy_activity_requests';
    protected $fillable = [
        'status',
        'program_and_project_id',
        'revision_plan_id',
        'created_by',
    ];
}
