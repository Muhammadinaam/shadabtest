import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from '../auth/guards/auth-guard.service';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsAddEditComponent } from './projects/projects-add-edit/projects-add-edit.component';
import { TimelogsListComponent } from './timelogs/timelogs-list/timelogs-list.component';
import { TimelogsAddEditComponent } from './timelogs/timelogs-add-edit/timelogs-add-edit.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  canActivateChild: [AuthGuardService],
  children: [
    // {
    //   path: 'dashboard',
    //   component: DashboardComponent,
    // },
    // {
    //   path: '',
    //   redirectTo: 'dashboard',
    //   pathMatch: 'full',
    // },

    {
      path: 'projects',
      component: ProjectsListComponent,
    },
    {
      path: '',
      redirectTo: 'projects',
      pathMatch: 'full',
    },
    {
      path: 'projects/:id/edit',
      component: ProjectsAddEditComponent,
    },
    {
      path: 'projects/create',
      component: ProjectsAddEditComponent,
    },

    {
      path: 'timelogs',
      component: TimelogsListComponent,
    },
    {
      path: 'timelogs/create',
      component: TimelogsAddEditComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
