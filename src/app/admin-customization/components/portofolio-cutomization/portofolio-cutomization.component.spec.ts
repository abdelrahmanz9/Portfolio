import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofolioCutomizationComponent } from './portofolio-cutomization.component';

describe('PortofolioCutomizationComponent', () => {
  let component: PortofolioCutomizationComponent;
  let fixture: ComponentFixture<PortofolioCutomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortofolioCutomizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortofolioCutomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
