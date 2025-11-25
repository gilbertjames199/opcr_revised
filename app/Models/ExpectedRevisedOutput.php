<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExpectedRevisedOutput extends Model
{
    use HasFactory;
    protected $guarded=['id'];
    public function comments()
    {
        return $this->hasMany(RevisionPlanComment::class, 'table_row_id', 'id');
        // ->where('table_name', 'revision_plans');
    }
    public function expected_output()
    {
        return $this->hasMany(ExpectedRevisedOutput::class, 'activity)d', 'id');
    }
}
