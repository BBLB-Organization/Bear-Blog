import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth-service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarLoginToggle = false;
  navbarWindow: any;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.navbarWindow = window;
  }

  ngOnInit(): void {
    let emailAddress = localStorage.getItem('emailAddress') ?? "";
    if (emailAddress != "") {
      this.authService.checkIfUserLoggedIn(emailAddress).subscribe((res) => {
        this.navbarLoginToggle = true;
      });
    }

  }

  logoutCurrentUser() {
    let emailAddress = localStorage.getItem('emailAddress');
    this.authService.logoutCurrentUser(emailAddress).subscribe();
    localStorage.removeItem('emailAddress');
    this.navbarWindow.location.reload();
  }

}
