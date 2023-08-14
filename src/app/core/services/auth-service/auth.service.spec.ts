import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap, take } from 'rxjs';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
  let service: AuthService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
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

  it('should return true if user email address is valid and user provides verification code', () => {
    let fakeUserVerificationCode = 12345;
    spyOn(httpClient, 'put').and.returnValue(of(true));
    service.checkVerificationCode(fakeEmailAddress, fakeUserVerificationCode).subscribe({
      next: (res: any) => {
        expect(res).toEqual(true);
      }
    })
  });

  describe('canActivate', () => {
    it('should navigate to home page when user is not logged in', async () => {
      const routeSnapshot: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
      const stateSnapshot: RouterStateSnapshot = {} as RouterStateSnapshot;

      const mockLoggedIn = false;
      spyOn(service, 'checkIfUserLoggedIn').and.returnValue(of(mockLoggedIn));
      spyOn(service.router, 'navigate');

      const canActivateResult = await service.canActivate(routeSnapshot, stateSnapshot);

      expect(canActivateResult).toBe(mockLoggedIn);
      expect(service.router.navigate).toHaveBeenCalledWith(['']);
    });

    it('should allow navigation when user is logged in', async () => {
      const routeSnapshot: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
      const stateSnapshot: RouterStateSnapshot = {} as RouterStateSnapshot;

      const mockLoggedIn = true;
      spyOn(service, 'checkIfUserLoggedIn').and.returnValue(of(mockLoggedIn));
      spyOn(service.router, 'navigate');

      const canActivateResult = await service.canActivate(routeSnapshot, stateSnapshot);

      expect(canActivateResult).toBe(mockLoggedIn);
      expect(service.router.navigate).not.toHaveBeenCalled();
    });
  });


});
