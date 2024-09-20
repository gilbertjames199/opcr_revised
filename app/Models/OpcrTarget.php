<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OpcrTarget extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = 'opcr_targets';
    protected $guarded = [];

    public function paps()
    {
        return $this->belongsTo(ProgramAndProject::class, 'idpaps', 'id');
    }
}
