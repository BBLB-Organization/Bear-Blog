import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserRegistrationPageComponent } from './create-user-registration-page.component';

describe('CreateUserRegistrationPageComponent', () => {
  let component: CreateUserRegistrationPageComponent;
  let fixture: ComponentFixture<CreateUserRegistrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserRegistrationPageComponent ]
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
