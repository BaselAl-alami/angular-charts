import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAdminChartsComponent } from './ngx-admin-charts.component';

describe('NgxAdminChartsComponent', () => {
  let component: NgxAdminChartsComponent;
  let fixture: ComponentFixture<NgxAdminChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAdminChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAdminChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
