<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Hash;

class AddRoleColumnInUsersTableAndTwoUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->enum('role', ['Admin', 'Scientist'])->after('userid');
        });

        DB::table('users')
            ->insert([
                'name' => 'Admin',
                'email' => 'admin@admin.com',
                'userid' => 'admin',
                'role' => 'Admin',
                'password' => Hash::make('123'),
            ]);

        DB::table('users')
            ->insert([
                'name' => 'Scientist',
                'email' => 'scientist@admin.com',
                'userid' => 'scientist',
                'role' => 'Scientist',
                'password' => Hash::make('123'),
            ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['role']);
        });

        DB::table('users')
            ->whereIn('name', ['Admin', 'Scientist'])
            ->delete();
    }
}
