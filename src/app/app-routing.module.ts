import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page-main.component';
import { UoflHealthMainComponent } from './uofl-health-main/uofl-health-main.component';
import { ScheduleViewComponent } from './schedule-view/schedule-view.component';
import { EndOfShiftComponent } from './end-of-shift-survey/end-of-shift-survey.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [  
  { path: '', redirectTo: 'app-login-page', pathMatch: 'full' },    //default module for index
  { path: 'app-login-page', component: LoginPageComponent },    
  { path: 'app-uofl-health-main', component: UoflHealthMainComponent },    
  { path: 'app-schedule-view', component: ScheduleViewComponent },
  { path: 'app-end-of-shift-survey', component: EndOfShiftComponent },    
  { path: 'app-employee-list', component: EmployeeListComponent },    
];  

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
