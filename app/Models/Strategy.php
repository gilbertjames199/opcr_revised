<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Strategy extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = 'strategies';
    protected $fillable = [
        'description',
        'idpaps',
        'idmfo'
    ];
    public function paps()
    {
        return $this->hasOne(ProgramAndProject::class, 'id', 'idpaps');
    }
    public function mfos()
    {
        return $this->hasOne(MajorFinalOutput::class, 'id', 'idmfo');
    }
    public function activity()
    {
        return $this->hasMany(Activity::class, 'strategy_id', 'id');
    }
    public function strategyProject()
    {
        return $this->hasMany(StrategyProject::class, 'strategy_id', 'id');
    }
}
