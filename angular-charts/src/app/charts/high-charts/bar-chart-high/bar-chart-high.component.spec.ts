import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartHighComponent } from './bar-chart-high.component';

describe('BarChartHighComponent', () => {
  let component: BarChartHighComponent;
  let fixture: ComponentFixture<BarChartHighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChartHighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
