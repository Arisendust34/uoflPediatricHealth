import { ComponentFixture, TestBed } from '@angular/core/testing';

import {UoflHealthMainComponent} from './uofl-health-main.component';

describe('HomePageComponent', () => {
  let component:UoflHealthMainComponent;
  let fixture: ComponentFixture<UoflHealthMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UoflHealthMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UoflHealthMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});