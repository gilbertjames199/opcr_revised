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
            $table->bigInteger('idpdip')->nullable()->comment('PAPS ID');
            $table->bigInteger('idooe')->nullable();
            $table->bigInteger('idindicator')->nullable()->comment('Indicator ID');
            $table->longText('description')->nullable()->comment('Target description');
            $table->string('brgy')->nullable()->comment('Barangay');
            $table->string('municipality')->nullable()->comment('Municipality');
            $table->date('planned_period_from')->nullable()->comment('Plan period start date');
            $table->date('planned_period_to')->nullable()->comment('Plan period end date');
            $table->string('planned_budget')->nullable()->comment('Plan budget');
            $table->string('target_qty')->nullable()->comment('Target Quantity');
            $table->string('onsite_tag')->nullable()->comment('Onsite tag answerable by yes or no');
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
