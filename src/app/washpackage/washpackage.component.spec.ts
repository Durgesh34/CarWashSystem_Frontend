import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashpackageComponent } from './washpackage.component';

describe('WashpackageComponent', () => {
  let component: WashpackageComponent;
  let fixture: ComponentFixture<WashpackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WashpackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WashpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
