import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseEndPointService } from '../../../services/base-end-point.service';

@Component({
  selector: 'datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  data = [];
  from;
  to;
  total;
  currentPage;
  search='';

  @Input()
  urlPart: string;

  @Input()
  columns;

  @Input()
  actionColumn = {
    show: true,
    header: 'Action',
    showEdit: true,
    showDelete: false,
  };

  constructor(private http: HttpClient) { };

  ngOnInit() {
    this.getPaginatedData(0, '');
  }

  getPaginatedData(page, search)
  {
    this.http.get(BaseEndPointService.getBaseEndPoint() + `/api/${this.urlPart}?page=${page}&search=${search}`)
      .subscribe(data => {
        this.data = data['data'];
        this.from = data['from'];
        this.to = data['to'];
        this.total = data['total'];
        this.currentPage = data['current_page'];
      });
  }

  delete(id){

    if( confirm("Are you sure you want to delete this record?") == true )
    {
      this.http.delete(BaseEndPointService.getBaseEndPoint() + `/api/${this.urlPart}/${id}`)
        .subscribe(data => {
          if(data['success'] == true)
          {
            alert('Deleted Successfully');
          }
          else
          {
            alert(data['message']);
          }
        });
    }

  }

  modify(item, modifier)
  {
    if( modifier != null )
    {
      return modifier(item);
    }
    
    return item;
    
  }
}
