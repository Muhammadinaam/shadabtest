<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Project;

class ProjectsController extends Controller
{
    public function index()
    {
        $role = Auth::user()->role;
        
        $projects = new Project;

        if( $role == 'Scientist' )
        {
            $projects = $projects->where('status', 'Ongoing');
        }

        if(request()->has('search') && request()->search != '')
        {
            $projects = $projects
                ->where('title', 'like', '%'.request()->search.'%')
                ->orWhere('description', 'like', '%'.request()->search.'%')
                ->orWhere('status', 'like', '%'.request()->search.'%');
        }

        if(request()->has('nopaging') && request()->nopaging == 1)
        {
            return $projects->get();
        }

        return $projects->paginate(10);
    }

    public function store()
    {
        $this->validate(request(), [
            'title' => 'required|unique:projects',
            'status' => 'required',
        ]);

        $project = new Project;

        return $this->saveData($project);
    }

    public function update($id)
    {
        $this->validate(request(), [
            'title' => 'required|unique:projects,title,' . $id,
            'status' => 'required',
        ]);

        $project = Project::find($id);

        return $this->saveData($project);
    }

    private function saveData($project)
    {
        
        try
        {
            $project->title = request()->title;
            $project->description = request()->description;
            $project->status = request()->status;

            $project->save();
            
            return [
                'success' => true,
                'id' => $project->id,
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

    public function edit($id)
    {
        return Project::find($id);
    }

    public function destroy($id)
    {
        try
        {
            Auth::user()->AbortIfNotAdmin();

            Project::where('id', $id)->delete();

            return [
                'success' => true,
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
