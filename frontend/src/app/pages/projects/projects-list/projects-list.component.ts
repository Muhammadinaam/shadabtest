import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.actionColumn.show = this.authService.currentUser['role'] == 'Admin';
  }

  actionColumn = {
    show: true,
    header: 'Action',
    showEdit: true,
    showDelete: true,
  };

  columns = [
    { header: 'Title', dataName: 'title', modifier: null, },
    { header: 'Description', dataName: 'description', modifier: null, },
    { header: 'Status', dataName: 'status', modifier: this.statusModifier, },
  ];

  statusModifier(status)
  {
    if(status == 'Ongoing')
    {
      return '<span class="badge badge-success">Ongoing</span>';
    }
    return '<span class="badge badge-info">Complete</span>';
  }

}
