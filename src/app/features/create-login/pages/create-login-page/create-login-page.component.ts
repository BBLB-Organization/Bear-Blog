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

  existingUser?: Users;
  signInForm: FormGroup = this.fb.group({
    emailAddress: ['', Validators.required],
    password: ['', Validators.required]
  },
    { updateOn: 'submit' }
  );

  get emailAddress(): string { return this.signInForm.get('emailAddress')?.value; }

  get password(): string { return this.signInForm.get('password')?.value; }

  prepareSignIn(): Users {
    let user : Users = {
      id: undefined,
      username: "",
      password: "",
      emailAddress: ""
    }
    return user;
  }

  login() {
    if (this.signInForm.valid) {
      let userLoggingIn = this.prepareSignIn();
      this.userService.checkLoginCredentials(userLoggingIn).subscribe({
        next: (user: Users) => {
          localStorage.setItem("username", user.username);
          this.loginPageWindow.location.reload();
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
