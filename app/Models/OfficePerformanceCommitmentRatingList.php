<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OfficePerformanceCommitmentRatingList extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = 'office_performance_commitment_rating_lists';
    protected $guarded = [];

    public function office()
    {
        return $this->hasOne(Office::class, 'department_code', 'department_code');
    }
}
