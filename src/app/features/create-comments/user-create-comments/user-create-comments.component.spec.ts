import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateCommentsComponent } from './user-create-comments.component';

describe('UserCreateCommentsComponent', () => {
  let component: UserCreateCommentsComponent;
  let fixture: ComponentFixture<UserCreateCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCreateCommentsComponent ]
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
