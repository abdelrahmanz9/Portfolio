import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCutomizationComponent } from './skills-cutomization.component';

describe('SkillsCutomizationComponent', () => {
  let component: SkillsCutomizationComponent;
  let fixture: ComponentFixture<SkillsCutomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsCutomizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsCutomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
