<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccomplishmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accomplishments', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('idtarget')->nullable();
            $table->decimal('accomplishment_qty',12,2)->nullable()->comment('Accomplishment quantity');
            $table->date('actual_period_from')->nullable()->comment('Actual period accomplished -from');
            $table->date('actual_period_to')->nullable()->comment('Actual period accomplished -to');
            $table->decimal('actual_expenditure',12,2)->nullable()->comment('Actual expenditure');
            $table->longText('facilitating_timeliness')->nullable()->comment('Facilitating timeliness');
            $table->longText('facilitating_competency')->nullable()->comment('Facilitating competency');
            $table->longText('facilitating_logistics')->nullable()->comment('Facilitting logistics');
            $table->longText('deterring_timeliness')->nullable()->comment('Deterring timeliness');
            $table->longText('deterring_concerns')->nullable()->comment('Deterring concerns');
            $table->longText('deterring_logistics')->nullable()->comment('Deterring logistics');
            $table->longText('concerns_timeliness')->nullable()->comment('Concerns timeliness');
            $table->longText('concerns_competency')->nullable()->comment('Concerns competency');
            $table->longText('concerns_logistics')->nullable()->comment('Concerns logistics');
            $table->longText('new_strategy')->nullable()->comment('New strategy');
            $table->longText('remarks')->nullable()->comment('Remarks');
            $table->date('date_accomplished_from')->nullable()->comment('Date accomplished from');
            $table->date('date_accomplished_to')->nullable()->comment('Date accomplished to');
            $table->string('validated_status')->nullable()->comment('Validated status -yes, no');
            $table->longText('validated_remarks')->nullable()->comment('Validated remarks ');
            $table->date('validated_date')->nullable()->comment('Date validated');
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
        Schema::dropIfExists('accomplishments');
    }
}
