<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RevisionPlan extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table = 'revision_plans';
    protected $guarded = [];

    public function checklist()
    {
        return $this->hasOne(HGDG_Checklist::class, 'id', 'checklist_id');
    }
    public function comments()
    {
        return $this->hasMany(RevisionPlanComment::class, 'table_row_id', 'id');
        // ->where('table_name', 'revision_plans');
    }
    public function budget()
    {
        return $this->hasMany(BudgetRequirement::class, 'revision_plan_id', 'id');
        // ->where('table_name', 'revision_plans');
    }
    public function paps()
    {
        return $this->belongsTo(ProgramAndProject::class, 'idpaps', 'id');
    }
    public function strategyProject()
    {
        return $this->hasMany(StrategyProject::class, 'project_id', 'id');
    }
    public function activityProject()
    {
        return $this->hasMany(ActivityProject::class, 'project_id', 'id');
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
