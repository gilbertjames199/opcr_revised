<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRevisionPlansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('revision_plans', function (Blueprint $table) {
            $table->id();
            $table->string('idpaps')->comment('PAPS ID');
            $table->string('aip_code')->comment('AIP Code of the Project');
            $table->string('project_title')->comment('Project title');
            $table->string('list_of_lgu_covered')->comment('List of LGUs covered');
            $table->string('date_start')->comment('Implementation schedule start');
            $table->string('date_end')->comment('Implementation schedule end');
            $table->integer('beneficiary_male')->comment('Intended beneficiaries -male');
            $table->integer('beneficiary_female')->comment('Intended beneficiaries -female');
            $table->integer('baseline_male')->comment('Baseline Disaggregated data -male');
            $table->integer('baseline_female')->comment('Baseline Disaggregated data -female');
            $table->integer('baseline_total')->comment('Baseline Disaggregated data -total');
            $table->decimal('amount',12,2)->comment('Cost of the program/project');
            $table->decimal('attributed_amount',12,2)->comment('Attributed GAD Budget');
            $table->bigInteger('idchecklist')->comment('ID of the program checklist');
            $table->decimal('hgdg_score',12,2)->comment('Actual HGDG score');
            $table->decimal('hgdg_percent',12,2)->comment('GAD Attributed Budget Percentage');
            $table->string('rationale')->comment('rationale of the project');
            $table->string('objective')->comment('Objectives of the project');
            $table->string('beneficiaries')->comment('List of beneficiaries');
            $table->integer('version')->comment('Numbers/ 1 for version one, 2 for version 2, etc');
            $table->string('type')->comment('Indicate if project profile/project design');
            $table->string('final')->comment('Indicate if the project profile or project design is final or not');
            $table->string('supplemental')->comment('Indicate if supplemental');
            $table->integer('iduser')->comment('ID of the user');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('revision_plans');
    }
}
