import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth-service/auth.service';
import { UsersService } from 'src/app/core/services/user-service/users.service';

@Component({
  selector: 'app-verification-user-page',
  templateUrl: './verification-user-page.component.html',
  styleUrls: ['./verification-user-page.component.css']
})
export class VerificationUserPageComponent implements OnInit {

  userEmailAddress: string = "";
  verificationForm: FormGroup = this.fb.group({
    verificationCode: ['', Validators.required]
  },
    { updateOn: 'submit' }
  );

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UsersService
  ) { }

  get verificationCode(): string { return this.verificationForm.get('verificationCode')?.value; }

  ngOnInit(): void {
  }

  async checkUserVerificationCode() {
    let id = 2;
    await this.getEmailAddress(id);
    console.log('AFTER ASYNC METHOD', this.userEmailAddress);
  }

  async getEmailAddress(userId: number) {
    await this.userService.getUserEmailAddressById(userId).subscribe({
      next: (res: any) => {
        this.userEmailAddress = res;
      }
    })
  }

}
