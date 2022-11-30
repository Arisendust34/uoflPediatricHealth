import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import{EmployeeListComponent} from './employee-list/employee-list.component';
import{EndOfShiftComponent} from './end-of-shift-survey/end-of-shift-survey.component';
import{ScheduleViewComponent} from './schedule-view/schedule-view.component';
import{UoflHealthMainComponent} from './uofl-health-main/uofl-health-main.component';
import{LoginPageComponent} from './login-page/login-page-main.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppComponent } from './app.component';
import { environment } from './environments/environment';
//ng-calendar stuff:
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './schedule-view/calendar/calendar.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadModalComponent } from './uofl-health-main/upload-modal/upload-modal.component';
import { UnderConstructionModalComponent } from './under-construction-modal/under-construction-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EndOfShiftComponent,
    ScheduleViewComponent,
    UoflHealthMainComponent,
    LoginPageComponent,
    CalendarComponent,
    UploadModalComponent,
    UnderConstructionModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaeConfig),
    AngularFirestoreModule,
    AngularFireAuthModule, 
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    NgbModule,
    CommonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CalendarComponent]
})
export class AppModule { }
