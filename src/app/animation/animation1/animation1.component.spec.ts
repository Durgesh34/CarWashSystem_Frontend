import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animation1Component } from './animation1.component';

describe('Animation1Component', () => {
  let component: Animation1Component;
  let fixture: ComponentFixture<Animation1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Animation1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
