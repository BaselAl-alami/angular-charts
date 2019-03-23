import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPieChartComponent } from './grid-pie-chart.component';

describe('GridPieChartComponent', () => {
  let component: GridPieChartComponent;
  let fixture: ComponentFixture<GridPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
