<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OfficePerformanceCommitmentRating extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='office_performance_commitment_ratings';
    protected $guarded = [];
}
