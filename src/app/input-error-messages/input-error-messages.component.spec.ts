import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputErrorMessagesComponent } from './input-error-messages.component';

describe('InputErrorMessagesComponent', () => {
  let component: InputErrorMessagesComponent;
  let fixture: ComponentFixture<InputErrorMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputErrorMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputErrorMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
