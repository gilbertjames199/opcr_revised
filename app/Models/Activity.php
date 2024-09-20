<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='activities';
    protected $fillable = [
        'description',
        'strategy_id'
    ];


    public function strat(){
        return $this -> hasOne(Strategy::class, 'id', 'strategy_id');
    }
}
