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
            $table->bigInteger('id_project_profile')->nullable();
            $table->string('particulars');
            $table->string('account_code');
            $table->decimal('amount',12,2);
            $table->string('category');
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
