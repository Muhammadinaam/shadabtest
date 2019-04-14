<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Timelog;
use Auth;

class TimelogsController extends Controller
{
    public function index()
    {
        $role = Auth::user()->role;
        
        $timelogs = Timelog::with(['user', 'project']);

        if( $role == 'Scientist' )
        {
            $timelogs = $timelogs->where('user_id', Auth::user()->id);
        }

        if(request()->has('search') && request()->search != '')
        {
            $timelogs = $timelogs
                ->where('description', 'like', '%'.request()->search.'%')
                ->orWhereHas('user', function($query){
                    $query->where('name', 'like', '%'.request()->search.'%');
                })
                ->orWhereHas('project', function($query){
                    $query->where('title', 'like', '%'.request()->search.'%');
                });
        }

        return $timelogs->paginate(10);
    }

    public function store()
    {
        $this->validate(request(), [
            'project' => 'required',
            'datetime_range' => 'required',
        ]);

        $timelog = new Timelog;

        return $this->saveData($timelog);
    }

    public function update($id)
    {
        $this->validate(request(), [
            'project' => 'required',
            'datetime_range' => 'required',
        ]);

        $timelog = Timelog::find($id);

        return $this->saveData($timelog);
    }

    private function saveData($timelog)
    {
        
        try
        {
            $timelog->project_id = request()->project;
            $timelog->user_id = Auth::user()->id;
            $timelog->description = request()->description;
            
            $start = \Carbon\Carbon::parse(request()->datetime_range[0]);
            $end = \Carbon\Carbon::parse(request()->datetime_range[1]);

            $seconds = $end->diffInSeconds($start);

            $timelog->start_datetime = $start->format('Y-m-d H:i:s');
            $timelog->end_datetime = $end->format('Y-m-d H:i:s');
            $timelog->seconds = abs($seconds);

            $timelog->save();
            
            return [
                'success' => true,
                'id' => $timelog->id,
            ];
        }
        catch(\Exception $ex)
        {
            return [
                'success' => false,
                'message' => $ex->getMessage(),
            ];
        }
    }

    
}
