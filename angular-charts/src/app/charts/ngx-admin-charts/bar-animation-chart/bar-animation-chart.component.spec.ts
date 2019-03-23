import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarAnimationChartComponent } from './bar-animation-chart.component';

describe('BarAnimationChartComponent', () => {
  let component: BarAnimationChartComponent;
  let fixture: ComponentFixture<BarAnimationChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarAnimationChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarAnimationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
