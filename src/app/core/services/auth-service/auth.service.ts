import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  usersURL: string = environment.usersURL;
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

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    let emailAddress = localStorage.getItem('emailAddress');

    return this.checkIfUserLoggedIn(emailAddress).pipe(
      switchMap((res: boolean) => {
        this.loggedIn = res;
        if (!this.loggedIn) {
          this.router.navigate(['']);
          return of(this.loggedIn)
        }
        else {
          return of(this.loggedIn);
        }

      })
    );

  }

}
