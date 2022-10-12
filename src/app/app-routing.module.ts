//This file is used by the <router-outlet> element, which currently lies in app.component.html
//If you need a component to occupy a new URL, add an import AND add it to the Routes[...] array

import { ModuleWithProviders } from '@angular/core';    
import { Routes, RouterModule } from '@angular/router';  
import{EmployeeListComponent} from './employee-list/employee-list.component';
import{EndOfShiftComponent} from './end-of-shift-survey/end-of-shift-survey.component';
import{ScheduleViewComponent} from './schedule-view/schedule-view.component';
import{UoflHealthMainComponent} from './uofl-health-main/uofl-health-main.component';
import{LoginPageComponent} from './login-page/login-page-main.component';
  
const appRoutes: Routes = [  
    { path: '', redirectTo: 'app-login-page', pathMatch: 'full' },    //default module for index
    { path: 'app-login-page', component: LoginPageComponent },    
    { path: 'app-uofl-health-main', component: UoflHealthMainComponent },    
    { path: 'app-schedule-view', component: ScheduleViewComponent },
    { path: 'app-end-of-shift-survey', component: EndOfShiftComponent },    
    { path: 'app-employee-list', component: EmployeeListComponent },    
];  
  
export const AppRoutingModule: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes); 