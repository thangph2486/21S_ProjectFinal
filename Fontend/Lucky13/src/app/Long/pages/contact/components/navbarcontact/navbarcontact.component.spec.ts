import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcontactComponent } from './navbarcontact.component';

describe('NavbarcontactComponent', () => {
  let component: NavbarcontactComponent;
  let fixture: ComponentFixture<NavbarcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarcontactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
