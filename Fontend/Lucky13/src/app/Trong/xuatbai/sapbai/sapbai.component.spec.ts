import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapbaiComponent } from './sapbai.component';

describe('SapbaiComponent', () => {
  let component: SapbaiComponent;
  let fixture: ComponentFixture<SapbaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SapbaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SapbaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
