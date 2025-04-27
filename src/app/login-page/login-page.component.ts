import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  step: 'mobile' | 'otp' = 'mobile';
  mobileForm: FormGroup;
  otpForm: FormGroup;

  constructor(private fb : FormBuilder,private router : Router) {
    this.mobileForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern('^[6-9]\\d{9}$')]]
    });

    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.pattern('^\\d{6}$')]]
    });
  }

  submitMobile() {
    if (this.mobileForm.valid) {
      // simulate sending OTP
      this.step = 'otp';
    }
  }

  submitOtp() {
    if (this.otpForm.valid) {
      this.router.navigate(['/stu_home']);

      // proceed with login logic
    }
  }

  goBack() {
    this.step = 'mobile';
    this.otpForm.reset();
  }

}
