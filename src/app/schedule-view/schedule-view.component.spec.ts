import { ComponentFixture, TestBed } from '@angular/core/testing';

import {ContactFieldComponent} from './schedule-view.component';

describe('HomePageComponent', () => {
  let component:ContactFieldComponent;
  let fixture: ComponentFixture<ContactFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});