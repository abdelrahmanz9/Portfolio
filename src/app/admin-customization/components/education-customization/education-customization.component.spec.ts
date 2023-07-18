import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCustomizationComponent } from './education-customization.component';

describe('EducationCustomizationComponent', () => {
  let component: EducationCustomizationComponent;
  let fixture: ComponentFixture<EducationCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationCustomizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
