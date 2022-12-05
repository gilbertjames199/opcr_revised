<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTargetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('targets', function (Blueprint $table) {
            $table->id();
            $table->string('idraao')->nullable();
            $table->string('idooe')->nullable();
            $table->string('idindicator')->nullable();
            $table->string('description')->nullable();
            $table->string('brgy')->nullable();
            $table->string('municipality')->nullable();
            $table->date('planned_period_from')->nullable();
            $table->date('planned_period_to')->nullable();
            $table->string('planned_budget')->nullable();
            $table->string('target_qty')->nullable();
            $table->string('onsite_tag')->nullable();
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
        Schema::dropIfExists('targets');
    }
}
