<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActivityProject extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = 'activity_projects';
    protected $guarded = [
        'id'
    ];
    public function activity()
    {
        return $this->belongsTo(Activity::class, 'activity_id', 'id');
    }
    public function expected_output()
    {
        return $this->hasMany(ExpectedRevisedOutput::class, 'activity_project_id', 'id');
    }
    public function expected_outcome()
    {
        return $this->hasMany(ExpectedRevisedOutcome::class, 'activity_project_id', 'id');
    }
}
