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
            $table->string('date_start');
            $table->string('date_end');
            $table->integer('beneficiary_male');
            $table->integer('beneficiary_female');
            $table->integer('baseline_male');
            $table->integer('baseline_female');
            $table->integer('baseline_total');
            $table->decimal('amount',12,2);
            $table->decimal('attributed_amount',12,2);
            $table->bigInteger('idchecklist');
            $table->decimal('hgdg_score',12,2);
            $table->decimal('hgdg_percent',12,2);
            $table->string('rationale');
            $table->string('objective');
            $table->string('beneficiaries');
            $table->integer('version');
            $table->string('type');
            $table->string('final');
            $table->string('supplemental');
            $table->integer('iduser');
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
