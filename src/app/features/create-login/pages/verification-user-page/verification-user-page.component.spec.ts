import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationUserPageComponent } from './verification-user-page.component';

describe('VerificationUserPageComponent', () => {
  let component: VerificationUserPageComponent;
  let fixture: ComponentFixture<VerificationUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationUserPageComponent ]
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
