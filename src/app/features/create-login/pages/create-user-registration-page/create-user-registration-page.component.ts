import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/core/models/users';
import { UsersService } from 'src/app/core/services/user-service/users.service';

@Component({
  selector: 'app-create-user-registration-page',
  templateUrl: './create-user-registration-page.component.html',
  styleUrls: ['./create-user-registration-page.component.css']
})
export class CreateUserRegistrationPageComponent implements OnInit {

  newUserInfo: Users = {
    id: undefined,
    firstName: "",
    lastName: "",
    userName: "",
    emailAddress: "",
    password: ""
  }

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
    this.newUserInfo.firstName = this.firstName;
    this.newUserInfo.lastName = this.lastName;
    this.newUserInfo.userName = this.username;
    this.newUserInfo.emailAddress=  this.email;
    this.newUserInfo.password = this.password;
  }

  registerUser(): void {
    if (this.registerForm.valid) {
      this.prepareSave();
      this.userService.registerUser(this.newUserInfo).subscribe((res)=>{
        console.log('USER SUCCESSFULLY REGISTERED',res);
      });
      this.router.navigate(['login']);
    }
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UsersService
  ) { }

  ngOnInit(): void {

  }

}
