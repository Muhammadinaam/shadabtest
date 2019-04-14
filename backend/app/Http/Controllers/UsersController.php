<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class UsersController extends Controller
{
    public function getCurrentUser()
    {
        return Auth::user();
    }
}
