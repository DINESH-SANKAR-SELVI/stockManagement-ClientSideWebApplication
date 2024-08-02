import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageLogoutComponent } from './message-logout.component';

describe('MessageLogoutComponent', () => {
  let component: MessageLogoutComponent;
  let fixture: ComponentFixture<MessageLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageLogoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
