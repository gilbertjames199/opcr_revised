<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBudgetRequirementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('budget_requirements', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('idrevision_plan')->comment('ID of the revision plan');
            //$table->bigInteger('id_project_profile')->nullable();
            $table->string('particulars')->comment('Particular');
            $table->string('account_code')->comment('Account code -from the chart of accounts');
            $table->decimal('amount',12,2)->comment('Amount of the budget');
            $table->string('category')->comment('Indicate if MOOE, PS or capital outlay');
            $table->string('category_gad')->comment('Indicate if GAD or Non-GAD');
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
        Schema::dropIfExists('budget_requirements');
    }
}
