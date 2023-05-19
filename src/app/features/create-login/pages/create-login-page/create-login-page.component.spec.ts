import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLoginPageComponent } from './create-login-page.component';

describe('CreateLoginPageComponent', () => {
  let component: CreateLoginPageComponent;
  let fixture: ComponentFixture<CreateLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLoginPageComponent ]
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
