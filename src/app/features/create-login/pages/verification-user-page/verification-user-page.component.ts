import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    private userService: UsersService,
    private route: ActivatedRoute
  ) { }

  get verificationCode(): number { return this.verificationForm.get('verificationCode')?.value; }

  ngOnInit(): void {
  }

  checkUserVerificationCode() {
    let userId = this.route.snapshot.paramMap.get('userId') ?? "";
    let id = Number(userId);
    this.getEmailAddress(id).then(() => {
      this.authService.checkVerificationCode(this.userEmailAddress, this.verificationCode).subscribe({
        next: (isUserVerificationValid: boolean) => {
          console.log('VERIFICATION CODE is: ', isUserVerificationValid);
        },
        error: (msg: any) => {
          console.log('VERIFICATION CODE IS INCORRECT', msg);
        }
      })
    });
  }

  getEmailAddress(userId: number | null) {
    return new Promise<void>((resolve, reject) => {
      this.userService.getUserEmailAddressById(userId).subscribe({
        next: (res: any) => {
          this.userEmailAddress = res;
          resolve();
        },
        error: (error: any) => {
          reject(error);
        }
      });
    });
  }


}
