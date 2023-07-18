import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoCustomizationComponent } from './personal-info-customization.component';

describe('PersonalInfoCustomizationComponent', () => {
  let component: PersonalInfoCustomizationComponent;
  let fixture: ComponentFixture<PersonalInfoCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalInfoCustomizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalInfoCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
