import { HighChartsComponent } from './charts/high-charts/high-charts.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxChartsComponent } from './charts/ngx-charts/ngx-charts.component';
import { NgxAdminChartsComponent } from './charts/ngx-admin-charts/ngx-admin-charts.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'ngx-admin-charts', component: NgxAdminChartsComponent },
  { path: 'ngx-charts', component: NgxChartsComponent },
  { path: 'high-charts', component: HighChartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
