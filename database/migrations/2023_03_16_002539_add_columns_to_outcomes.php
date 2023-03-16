<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToOutcomes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('outcomes', function (Blueprint $table) {
            //
            $table->string('id_org_goals')->nullable();
            $table->string('id_sec_goals')->nullable();
            $table->string('id_sdg_goals')->nullable();
            $table->string('id_cea')->nullable();
            $table->string('id_sea')->nullable();
            $table->string('id_ela')->nullable();
            $table->string('id_rea')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('outcomes', function (Blueprint $table) {
            //
        });
    }
}
