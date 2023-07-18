import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCustonizationComponent } from './home-custonization.component';

describe('HomeCustonizationComponent', () => {
  let component: HomeCustonizationComponent;
  let fixture: ComponentFixture<HomeCustonizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCustonizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCustonizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
