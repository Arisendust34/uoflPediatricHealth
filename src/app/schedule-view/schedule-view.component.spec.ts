import { ComponentFixture, TestBed } from '@angular/core/testing';

import {ScheduleViewComponent} from './schedule-view.component';
import{EmployeeListDto} from '../dto/EmployeeListDto';

describe('HomePageComponent', () => {
  let component:ScheduleViewComponent;
  let fixture: ComponentFixture<ScheduleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduleViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const mockSchedule = new Map<string, any>();
  mockSchedule.set('Employee',[
    {firstName:'Caperll', lastName:'K', employeeType:'Trainee'},
    {firstName:'Klensch', lastName:'J', employeeType:'Trainer'},
    {firstName: 'Hart', lastName:'R', employeeType: 'Admin'},
    {firstName: 'Magloire', lastName:'V', employeeType: 'Trainee'},
    {firstName: 'Lund', lastName:'R', employeeType:'Trainer'},
    {firstName: 'Spurlin', lastName:'B', employeeType: 'Admin'},
    {firstName: 'Starr', lastName:'R', employeeType: 'Admin'},
    {firstName: 'Patterson', lastName:'A', employeeType: 'Admin'},
    {firstName: 'Poteh', lastName:'A', employeeType: 'Trainee'},
    {firstName: 'Hanson', lastName:'A', employeeType:'Trainer'},
    {firstName: 'Eastep', lastName:'K', employeeType: 'Trainer'},
    {firstName: 'Bhargava', lastName:'A', employeeType: 'Admin'},
    {firstName: 'Laniewicz', lastName:'M', employeeType: 'Trainer'},
    {firstName: 'Anderson', lastName:'B', employeeType: "Admin"},
  ]);
});


