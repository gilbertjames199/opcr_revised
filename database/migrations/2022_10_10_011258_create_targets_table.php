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
            $table->bigInteger('idpdip')->nullable();
            $table->bigInteger('idooe')->nullable();
            $table->bigInteger('idindicator')->nullable();
            $table->longText('description')->nullable();
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
