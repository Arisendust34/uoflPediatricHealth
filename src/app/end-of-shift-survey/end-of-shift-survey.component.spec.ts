import { ComponentFixture, TestBed } from '@angular/core/testing';

import {EndOfShiftComponent} from './end-of-shift-survey.component';

describe('HomePageComponent', () => {
  let component:EndOfShiftComponent;
  let fixture: ComponentFixture<EndOfShiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EndOfShiftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndOfShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});