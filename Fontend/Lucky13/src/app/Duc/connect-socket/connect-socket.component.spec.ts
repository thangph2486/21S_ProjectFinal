import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectSocketComponent } from './connect-socket.component';

describe('ConnectSocketComponent', () => {
  let component: ConnectSocketComponent;
  let fixture: ComponentFixture<ConnectSocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectSocketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectSocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
