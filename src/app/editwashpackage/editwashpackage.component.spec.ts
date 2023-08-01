import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditwashpackageComponent } from './editwashpackage.component';

describe('EditwashpackageComponent', () => {
  let component: EditwashpackageComponent;
  let fixture: ComponentFixture<EditwashpackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditwashpackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditwashpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
