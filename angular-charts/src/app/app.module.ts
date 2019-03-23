import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxChartsModule } from '@swimlane/ngx-charts';


import { NgxEchartsModule } from 'ngx-echarts';
import { NbThemeModule } from '../../node_modules/@nebular/theme/theme.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { NgxAdminChartsComponent } from 'src/app/charts/ngx-admin-charts/ngx-admin-charts.component';
import { NgxChartsComponent } from './charts/ngx-charts/ngx-charts.component';
import { AdvancedPieChartComponent } from './charts/ngx-charts/advanced-pie-chart/advanced-pie-chart.component';
import { GridPieChartComponent } from './charts/ngx-charts/grid-pie-chart/grid-pie-chart.component';
import { LinePieChartComponent } from './charts/ngx-charts/line-pie-chart/line-pie-chart.component';

import { HighchartsChartComponent } from 'highcharts-angular';
import { HighChartsComponent } from './charts/high-charts/high-charts.component';
import { BarAnimationChartComponent } from './charts/ngx-admin-charts/bar-animation-chart/bar-animation-chart.component';
import { PieChartComponent } from './charts/ngx-admin-charts/pie-chart/pie-chart.component';
import { BarChartHighComponent } from './charts/high-charts/bar-chart-high/bar-chart-high.component';
import { PieChartHighComponent } from './charts/high-charts/pie-chart-high/pie-chart-high.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    NgxAdminChartsComponent,
    NgxChartsComponent,
    AdvancedPieChartComponent,
    GridPieChartComponent,
    LinePieChartComponent,
    HighchartsChartComponent,
    HighChartsComponent,
    BarAnimationChartComponent,
    PieChartComponent,
    BarChartHighComponent,
    PieChartHighComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule,
    NgxChartsModule,
    NbThemeModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
