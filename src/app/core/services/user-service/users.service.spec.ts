import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Users } from '../../models/users';
import { of } from 'rxjs';

describe('UsersService', () => {
  let service: UsersService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UsersService);
    http = TestBed.inject(HttpClient);
  });

  const mockUser: Users = {
    id: 1,
    firstName: 'Mock',
    lastName: "User",
    userName: 'mockUser',
    emailAddress: 'mock-user@email.com',
    password: 'mockpassword',
    loggedIn: false
  }

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register user to backend', () => {
    spyOn(http, 'post').and.returnValue(of(mockUser));
    service.registerUser(mockUser).subscribe({
      next: (res: any) => {
        expect(res).toEqual(mockUser);
      }
    });
  });

  it('should check login credentials provided current user information', () => {
    spyOn(http, 'post').and.returnValue(of(mockUser));
    service.checkLoginCredentials(mockUser).subscribe({
      next: (res: any) => {
        expect(res).toEqual(mockUser);
      }
    });
  });

  it('should get user email address provided user id',()=>{
    spyOn(http, 'get').and.returnValue(of(mockUser.emailAddress));
    service.getUserEmailAddressById(1).subscribe({
      next: (res:any)=>{
        expect(res).toEqual(mockUser.emailAddress);
      }
    })
  });

  it('should change current user password given current user email address and new password they want to set',()=>{
    spyOn(http, 'put').and.returnValue(of(mockUser.password));
    service.changeCurrentUserPassword(mockUser.emailAddress, mockUser.password).subscribe({
      next:(res:any)=>{
        expect(res).toEqual(mockUser.password);
      }
    })
  });

});
