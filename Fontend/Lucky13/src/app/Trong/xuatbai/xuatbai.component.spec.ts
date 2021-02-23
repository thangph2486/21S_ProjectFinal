import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XuatbaiComponent } from './xuatbai.component';

describe('XuatbaiComponent', () => {
  let component: XuatbaiComponent;
  let fixture: ComponentFixture<XuatbaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XuatbaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XuatbaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
