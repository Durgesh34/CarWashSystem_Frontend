import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherpageComponent } from './washerpage.component';

describe('WasherpageComponent', () => {
  let component: WasherpageComponent;
  let fixture: ComponentFixture<WasherpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasherpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WasherpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
