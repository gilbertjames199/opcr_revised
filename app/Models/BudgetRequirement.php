<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BudgetRequirement extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='budget_requirements';
    protected $fillable = [
        'particulars',
        'account_code',
        'amount',
        'category',
    ];
}
