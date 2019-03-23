import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinePieChartComponent } from './line-pie-chart.component';

describe('LinePieChartComponent', () => {
  let component: LinePieChartComponent;
  let fixture: ComponentFixture<LinePieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinePieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinePieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
