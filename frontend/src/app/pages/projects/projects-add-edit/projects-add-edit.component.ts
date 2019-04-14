import { Component, OnInit } from '@angular/core';
import { GenericAddEdit } from '../../classes/GenericAddEdit';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericDataService } from '../../classes/GenericDataService';
import { HttpClient } from '@angular/common/http';
import { BaseEndPointService } from '../../../services/base-end-point.service';

@Component({
  selector: 'projects-add-edit',
  templateUrl: './projects-add-edit.component.html',
  styleUrls: ['./projects-add-edit.component.scss']
})
export class ProjectsAddEditComponent extends GenericAddEdit {

  data: any = {
    title: '',
    description: '',
    status: '',
  };

  constructor(
    private activatedRoute: ActivatedRoute, 
    private genericService: GenericDataService,
    private http: HttpClient,
    private router: Router) {

    super(activatedRoute, genericService, http, router);
    this.genericService.url = BaseEndPointService.getBaseEndPoint() + "/api/projects"
    this.imagesFolder = "projects";
  }

  ngOnInit() {

    super.ngOnInit();
    console.log(this.editingId);
    this.redirectPathAfterAddEdit = '/pages/projects';
  }

}
