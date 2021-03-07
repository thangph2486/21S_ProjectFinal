import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFindroomComponent } from './nav-findroom.component';

describe('NavFindroomComponent', () => {
  let component: NavFindroomComponent;
  let fixture: ComponentFixture<NavFindroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavFindroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFindroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
