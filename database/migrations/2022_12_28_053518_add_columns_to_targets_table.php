<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToTargetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('targets', function (Blueprint $table) {
            $table->decimal('target_qty1',12,2)->nullable();
            $table->decimal('target_qty2',12,2)->nullable();
            $table->decimal('target_qty3',12,2)->nullable();
            $table->decimal('target_qty4',12,2)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('targets', function (Blueprint $table) {
            //
        });
    }
}
