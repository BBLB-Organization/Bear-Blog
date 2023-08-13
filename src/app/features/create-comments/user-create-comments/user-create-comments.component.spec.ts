import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateCommentsComponent } from './user-create-comments.component';
import { FormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('UserCreateCommentsComponent', () => {
  let component: UserCreateCommentsComponent;
  let fixture: ComponentFixture<UserCreateCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCreateCommentsComponent ],
      imports: [HttpClientTestingModule],
      providers: [FormBuilder],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCreateCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
