import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListshowcardsComponent } from './listshowcards.component';

describe('ListshowcardsComponent', () => {
  let component: ListshowcardsComponent;
  let fixture: ComponentFixture<ListshowcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListshowcardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListshowcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
