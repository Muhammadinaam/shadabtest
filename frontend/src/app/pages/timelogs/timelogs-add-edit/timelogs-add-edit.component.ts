import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericDataService } from '../../classes/GenericDataService';
import { HttpClient } from '@angular/common/http';
import { BaseEndPointService } from '../../../services/base-end-point.service';
import { GenericAddEdit } from '../../classes/GenericAddEdit';
import * as moment from 'moment';

@Component({
  selector: 'timelogs-add-edit',
  templateUrl: './timelogs-add-edit.component.html',
  styleUrls: ['./timelogs-add-edit.component.scss']
})
export class TimelogsAddEditComponent extends GenericAddEdit {

  ongoingProjects:any = [];

  data: any = {
    project: '',
    datetime_range: [],
    description: '',
  };

  constructor(
    private activatedRoute: ActivatedRoute, 
    private genericService: GenericDataService,
    private http: HttpClient,
    private router: Router) {

    super(activatedRoute, genericService, http, router);
    this.genericService.url = BaseEndPointService.getBaseEndPoint() + "/api/timelogs"
    this.imagesFolder = "timelogs";
  }

  ngOnInit() {

    super.ngOnInit();
    console.log(this.editingId);
    this.redirectPathAfterAddEdit = '/pages/timelogs';

    // this is a small project, no need to create separate service
    this.http.get(BaseEndPointService.getBaseEndPoint() + '/api/projects?nopaging=1')
      .subscribe(data => {
        this.ongoingProjects = data;
      });
  }

  onSubmit()
  {
    if(this.data.datetime_range == null || 
      this.data.datetime_range.length == 0 ||
      this.data.datetime_range[0] == null || 
      this.data.datetime_range[1] == null )
      {
        alert('Date/Time range is not valid');
        return;
      }
      
      if( moment(this.data.datetime_range[0]).isSame(moment(this.data.datetime_range[1])) )
      {
        
        alert('Both dates are same');
        return;
      }

    super.onSubmit();
  }

}
