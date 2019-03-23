import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartHighComponent } from './pie-chart-high.component';

describe('PieChartHighComponent', () => {
  let component: PieChartHighComponent;
  let fixture: ComponentFixture<PieChartHighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChartHighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
