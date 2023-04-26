<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImplementationPlansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('implementation_plans', function (Blueprint $table) {
            $table->id();
            $table->string('aip_code');
            $table->bigInteger('idrev_plan');
            $table->bigInteger('idactivity');
            $table->bigInteger('idstrategy');
            $table->bigInteger('idissue');
            $table->date('date_from');
            $table->date('date_to');
            $table->date('idtarget');
            $table->date('idindicator');
            $table->decimal('amount',12,2);
            $table->decimal('cc_adaptation',12,2);
            $table->decimal('cc_migitagion',12,2);
            $table->string('cc_topology');
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
        Schema::dropIfExists('implementation_plans');
    }
}
