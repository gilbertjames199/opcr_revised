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
            $table->string('idpaps');
            $table->string('aip_code');
            $table->string('project_title');
            $table->string('location');
            $table->string('list_of_lgu_covered');
            $table->string('date_start');
            $table->string('date_end');
            $table->integer('beneficiary_male');
            $table->integer('beneficiary_female');
            $table->integer('baseline_male');
            $table->integer('baseline_female');
            $table->integer('baseline_total');
            $table->decimal('amount',12,2);
            $table->decimal('attributed_amount',12,2);
            $table->integer('baseline_total');
            $table->bigInteger('idchecklist');
            $table->decimal('hgdg_score',12,2);
            $table->decimal('hgdg_percent',12,2);
            $table->string('rationale');
            $table->string('objective');
            $table->string('beneficiaries');
            $table->string('aip_code');
            $table->string('version');
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
