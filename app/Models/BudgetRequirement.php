<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BudgetRequirement extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = 'budget_requirements';
    protected $fillable = [
        'particulars',
        'account_code',
        'amount',
        'category',
        'category_gad',
        'source'
    ];

    public function comments()
    {
        return $this->hasMany(RevisionPlanComment::class, 'table_row_id', 'id');
        // ->where('table_name', 'revision_plans');
    }
}
