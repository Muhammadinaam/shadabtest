import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelogsListComponent } from './timelogs-list.component';

describe('TimelogsListComponent', () => {
  let component: TimelogsListComponent;
  let fixture: ComponentFixture<TimelogsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelogsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelogsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
