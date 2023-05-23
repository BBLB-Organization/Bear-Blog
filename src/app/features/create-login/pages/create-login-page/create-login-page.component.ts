import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/core/models/users';
import { UsersService } from 'src/app/core/services/user-service/users.service';

@Component({
  selector: 'app-create-login-page',
  templateUrl: './create-login-page.component.html',
  styleUrls: ['./create-login-page.component.css']
})
export class CreateLoginPageComponent implements OnInit {

  loginPageWindow: any;

  existingUser: Users = {
    id: undefined,
    userName: "",
    password: "",
    emailAddress: "",
    firstName: "",
    lastName: "",
    loggedIn: false
  };

  signInForm: FormGroup = this.fb.group({
    emailAddress: ['', Validators.required],
    password: ['', Validators.required]
  },
    { updateOn: 'submit' }
  );

  get emailAddress(): string { return this.signInForm.get('emailAddress')?.value; }

  get password(): string { return this.signInForm.get('password')?.value; }

  prepareSignIn() {
    this.existingUser.emailAddress = this.emailAddress;
    this.existingUser.password = this.password;
  }

  login() {
    if (this.signInForm.valid) {
      this.prepareSignIn();
      this.userService.checkLoginCredentials(this.existingUser).subscribe({
        next: (user: Users) => {
          localStorage.setItem('emailAddress', this.existingUser.emailAddress);
        }
      }
      );



    }
  }

  goToRegisterPage() {
    this.router.navigate(['register']);
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UsersService) {
    this.loginPageWindow = window;
  }

  ngOnInit(): void {

  }

}
