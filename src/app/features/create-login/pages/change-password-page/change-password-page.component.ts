import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth-service/auth.service';
import { UsersService } from 'src/app/core/services/user-service/users.service';

@Component({
  selector: 'app-change-password-page',
  templateUrl: './change-password-page.component.html',
  styleUrls: ['./change-password-page.component.css']
})
export class ChangePasswordPageComponent implements OnInit {

  userEmailAddress: string = "";
  changePasswordForm: FormGroup = this.fb.group({
    newPassword: ['', Validators.required],
    confirmNewPassword: ['', Validators.required]
  },
    { updateOn: 'submit' }
  );

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UsersService,
    private route: ActivatedRoute
  ) { }

  get newPassword(): string { return this.changePasswordForm.get('newPassword')?.value; }
  get confirmNewPassword(): string { return this.changePasswordForm.get('confirmNewPassword')?.value; }

  ngOnInit(): void {
  }

  changeUserPassword() {
    console.log('Change password function');
  }
}
