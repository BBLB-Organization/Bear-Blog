import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserRegistrationPageComponent } from './create-user-registration-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CreateUserRegistrationPageComponent', () => {
  let component: CreateUserRegistrationPageComponent;
  let fixture: ComponentFixture<CreateUserRegistrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserRegistrationPageComponent ],
      imports: [HttpClientTestingModule],
      providers: [FormBuilder],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
