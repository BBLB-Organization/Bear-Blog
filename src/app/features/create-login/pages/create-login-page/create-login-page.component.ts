import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-login-page',
  templateUrl: './create-login-page.component.html',
  styleUrls: ['./create-login-page.component.css']
})
export class CreateLoginPageComponent implements OnInit {

  loginPageWindow: any;

  //existingUser?: Users;
  accessToken: string = "";
  signInForm: FormGroup = this.fb.group({
    emailAddress: ['', Validators.required],
    password: ['', Validators.required]
  },
    { updateOn: 'submit' }
  );

  get emailAddress(): string { return this.signInForm.get('emailAddress')?.value; }

  get password(): string { return this.signInForm.get('password')?.value; }

  prepareSignIn() {
  }

  login() {
    if (this.signInForm.valid) {
      let userLoggingIn = this.prepareSignIn();



    }
  }

  goToRegisterPage() {
    this.router.navigate(['register']);
  }

  constructor(
    private fb: FormBuilder,
    private router: Router
    ) {
    this.loginPageWindow = window;
  }

  ngOnInit(): void {
    if (localStorage.getItem("accessToken") != null) {
      this.router.navigate(['homepage']);
    }
  }

}
