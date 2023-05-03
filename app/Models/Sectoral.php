<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sectoral extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='sectoral_goals';
    protected $fillable = [
        'goal_description',
        'sector',
    ];

    public function sectors(){
        return $this -> hasOne(Sector::class, 'id', 'sector');
    }
}
