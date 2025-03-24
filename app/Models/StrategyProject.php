<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StrategyProject extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = 'strategy_projects';
    protected $guarded = [
        'id'
    ];

    public function strategy()
    {
        return $this->belongsTo(Strategy::class, 'strategy_id', 'id');
    }
}
