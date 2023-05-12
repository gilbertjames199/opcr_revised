<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RevisionPlan extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='revision_plans';
    protected $guarded=[];

    public function checklist(){
        return $this -> hasOne(HGDG_Checklist::class, 'id', 'checklist_id');
    }
    // protected $fillable = [
    //     'id',
    //     'idpaps',
    //     'aip_code',
    //     'project_title',
    //     'list_of_lgu_covered',
    //     'date_start',
    //     'date_end',
    //     'beneficiary_male',
    //     'beneficiary_female',
    //     'baseline_male',
    //     'baseline_female',
    //     'baseline_total',
    //     'amount',
    //     'attributed_amount',
    //     'checklist_id',
    //     'hgdg_score',
    //     'hgdg_percent',
    //     'rationale',
    //     'objective',
    //     'beneficiaries',
    //     'version',
    //     'type',
    //     'final',
    //     'supplemental',
    //     'user_id',
    // ];
}
