import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderConstructionModalComponent } from './under-construction-modal.component';

describe('UnderConstructionModalComponent', () => {
  let component: UnderConstructionModalComponent;
  let fixture: ComponentFixture<UnderConstructionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderConstructionModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderConstructionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
