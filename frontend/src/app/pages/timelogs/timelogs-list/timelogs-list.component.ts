import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'timelogs-list',
  templateUrl: './timelogs-list.component.html',
  styleUrls: ['./timelogs-list.component.scss']
})
export class TimelogsListComponent implements OnInit {

  role: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.role = this.authService.currentUser['role'];
  }

  actionColumn = {
    show: false,
    header: 'Action',
    showEdit: false,
    showDelete: false,
  };

  columns = [
    { header: 'Project Title', dataName: 'project', modifier: this.projectModifier, },
    { header: 'Scientist Name', dataName: 'user', modifier: this.userModifier, },
    { header: 'Start DateTime', dataName: 'start_datetime', modifier: null, },
    { header: 'End DateTime', dataName: 'end_datetime', modifier: null, },
    { header: 'Hours', dataName: 'seconds', modifier: this.secondsModifier, },
    { header: 'Description', dataName: 'description', modifier: null, },
  ];

  secondsModifier(seconds)
  {
    return Number(seconds / 60 / 60).toFixed(2) ;
  }

  projectModifier(timelog)
  {
    return timelog['title'];
  }

  userModifier(user)
  {
    return user['name'];
  }

}
