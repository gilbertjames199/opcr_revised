<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeamPlan extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='team_plans';
    protected $guarded = [];
}
