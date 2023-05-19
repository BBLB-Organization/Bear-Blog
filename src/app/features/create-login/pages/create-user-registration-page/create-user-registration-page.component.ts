import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user-registration-page',
  templateUrl: './create-user-registration-page.component.html',
  styleUrls: ['./create-user-registration-page.component.css']
})
export class CreateUserRegistrationPageComponent implements OnInit {

  registerForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  },
    { updateOn: 'submit' }
  );

  get firstName(): string { return this.registerForm.get('firstName')?.value; }
  get lastName(): string { return this.registerForm.get('lastName')?.value; }
  get username(): string { return this.registerForm.get('username')?.value; }
  get email(): string { return this.registerForm.get('email')?.value; }
  get password(): string { return this.registerForm.get('password')?.value; }

  prepareSave() {
  }

  registerUser(): void {
    if (this.registerForm.valid) {
      let registeredUser = this.prepareSave();
      this.router.navigate(['login']);
    }
  }

  constructor(
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {

  }

}
