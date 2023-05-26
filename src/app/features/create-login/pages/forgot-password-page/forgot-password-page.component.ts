import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.css']
})
export class ForgotPasswordPageComponent implements OnInit {

  forgotPasswordForm: FormGroup = this.fb.group({
    emailAddress: ['', Validators.required]
  },
    { updateOn: 'submit' }
  );

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  get emailAddress(): string { return this.forgotPasswordForm.get('emailAddress')?.value; }

  forgotPassword() {

  }

}
