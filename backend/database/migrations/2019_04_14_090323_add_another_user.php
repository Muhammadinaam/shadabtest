<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddAnotherUser extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            
            DB::table('users')
            ->insert([
                'name' => 'Scientist2',
                'email' => 'scientist2@admin.com',
                'userid' => 'scientist2',
                'role' => 'Scientist',
                'password' => Hash::make('123'),
            ]);

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            
            DB::table('users')
                ->whereIn('name', ['Scientist2'])
                ->delete();

        });
    }
}
