import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationUserPageComponent } from './verification-user-page.component';
import { FormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('VerificationUserPageComponent', () => {
  let component: VerificationUserPageComponent;
  let fixture: ComponentFixture<VerificationUserPageComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: {} }
  } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerificationUserPageComponent],
      imports: [HttpClientTestingModule],
      providers: [FormBuilder, {
        provide: ActivatedRoute,
        useValue: fakeActivatedRoute
      }],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(VerificationUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
