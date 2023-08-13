import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  const fakeEmailAddress: string = 'fake@email.com';

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true when user logged in given specific email address', () => {
    let userLoggedInState = true;
    spyOn(httpClient, 'get').and.returnValue(of(userLoggedInState));
    service.checkIfUserLoggedIn(fakeEmailAddress).subscribe({
      next: (res: any) => {
        expect(res).toBeTrue();
      }
    })
  });

  it('should logout current user given specific email address', () => {
    spyOn(httpClient, 'put').and.returnValue(of(true));
    service.logoutCurrentUser(fakeEmailAddress).subscribe({
      next: (res: any) => {
        expect(res).toBeTrue();
      }
    })
  });

  it('should return message if user email has been found and email has been sent to user', () => {
    let mockResponseMessage = 'Email has been successfully sent!';
    spyOn(httpClient, 'put').and.returnValue(of(mockResponseMessage));
    service.sendForgotPasswordEmail(fakeEmailAddress).subscribe({
      next: (res: any) => {
        expect(res).toEqual(mockResponseMessage);
      }
    })
  });

});
