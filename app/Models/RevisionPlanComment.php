<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RevisionPlanComment extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = 'revision_plan_comments';
    protected $guarded = [
        'id'
    ];

    public function user()
    {
        return $this->hasOne(User::class, 'recid', 'user_id');
        // ->where('table_name', 'revision_plans');
    }
}
