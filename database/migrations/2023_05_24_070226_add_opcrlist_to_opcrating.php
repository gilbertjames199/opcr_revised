<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddOpcrlistToOpcrating extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('office_performance_commitment_ratings', function (Blueprint $table) {
            $table->integer('opcr_id')->after('remarks')->comment('OPCR value');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('office_performance_commitment_ratings', function (Blueprint $table) {
            //
        });
    }
}