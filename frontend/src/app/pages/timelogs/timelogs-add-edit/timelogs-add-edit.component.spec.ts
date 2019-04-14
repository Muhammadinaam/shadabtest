import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelogsAddEditComponent } from './timelogs-add-edit.component';

describe('TimelogsAddEditComponent', () => {
  let component: TimelogsAddEditComponent;
  let fixture: ComponentFixture<TimelogsAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelogsAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelogsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
