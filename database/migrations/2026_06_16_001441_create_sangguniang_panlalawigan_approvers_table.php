<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSangguniangPanlalawiganApproversTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sangguniang_panlalawigan_approvers', function (Blueprint $table) {
            $table->id();
            $table->string('employee_code');
            $table->string('name');
            $table->string('post');
            $table->string('is_present')->default('1');
            $table->string('with_signature')->default('1');
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
        Schema::dropIfExists('sangguniang_panlalawigan_approvers');
    }
}
