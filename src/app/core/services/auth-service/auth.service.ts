import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, catchError, map, of, switchMap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(
    public router: Router,
    private http: HttpClient
  ) { }

  usersURL: string = environment.usersURL;
  emailURL: string = environment.emailURL;
  loggedIn: boolean = false;
  userHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  checkIfUserLoggedIn(emailAddress: string | null): Observable<boolean> {
    return this.http.get<boolean>(this.usersURL + "?emailAddress=" + emailAddress);
  }

  logoutCurrentUser(emailAddress: string | null): Observable<boolean> {
    return this.http.put<boolean>(this.usersURL + "/logout?emailAddress=" + emailAddress, {});
  }

  sendForgotPasswordEmail(emailAddress: string | null): Observable<string> {
    return this.http.put(this.emailURL + "?emailAddress=" + emailAddress, {}, { responseType: 'text' })
      .pipe(map(response => response as string));
  }

  checkVerificationCode(userEmailAddress: string | null, userGeneratedVerificationCode: number | null): Observable<boolean> {
    return this.http.put<boolean>(this.emailURL + "/check-verification-code?userEmailAddress=" + userEmailAddress + "&userGeneratedVerificationCode=" + userGeneratedVerificationCode, {});
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    return new Promise<boolean | UrlTree>((resolve) => {
      let emailAddress = localStorage.getItem('emailAddress');

      this.checkIfUserLoggedIn(emailAddress).subscribe(((res: boolean) => {
        this.loggedIn = res;
        if (!this.loggedIn) {
          this.router.navigate(['']);
        }
        resolve(this.loggedIn);
      })
      )
    });
  }


}
