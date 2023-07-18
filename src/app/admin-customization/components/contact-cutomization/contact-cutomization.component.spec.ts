import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCutomizationComponent } from './contact-cutomization.component';

describe('ContactCutomizationComponent', () => {
  let component: ContactCutomizationComponent;
  let fixture: ComponentFixture<ContactCutomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactCutomizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactCutomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
