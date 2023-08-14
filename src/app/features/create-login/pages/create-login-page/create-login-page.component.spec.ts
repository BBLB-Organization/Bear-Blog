import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLoginPageComponent } from './create-login-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CreateLoginPageComponent', () => {
  let component: CreateLoginPageComponent;
  let fixture: ComponentFixture<CreateLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLoginPageComponent ],
      imports: [HttpClientTestingModule],
      providers: [FormBuilder],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
