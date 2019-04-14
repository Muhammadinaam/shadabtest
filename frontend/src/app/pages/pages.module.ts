import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsAddEditComponent } from './projects/projects-add-edit/projects-add-edit.component';
import { DatatableComponent } from './widgets/datatable/datatable.component';
import { ValidationComponent } from './validation/validation.component';
import { TimelogsListComponent } from './timelogs/timelogs-list/timelogs-list.component';
import { TimelogsAddEditComponent } from './timelogs/timelogs-add-edit/timelogs-add-edit.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,

    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    ProjectsListComponent,
    ProjectsAddEditComponent,
    DatatableComponent,
    ValidationComponent,
    TimelogsListComponent,
    TimelogsAddEditComponent,
  ],
})
export class PagesModule {
}
