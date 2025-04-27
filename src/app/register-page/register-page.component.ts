import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent  {

    registerForm: FormGroup;
    generatedOtp: string = '';
    submitted = false;
    otp :number = 0;
    entered_otp :number = 0;

    constructor(private fb: FormBuilder) {
      this.registerForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        otp: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]]
      });
    }

    generateOTP() {
      const otp = Math.floor(1000 + Math.random() * 9000); // Generates random 4-digit number
      this.generatedOtp = otp.toString();
      console.log('Generated OTP:', this.generatedOtp);
      // alert('Your OTP is: ' + this.generatedOtp);
      this.otp = parseInt(this.generatedOtp);
      // alert('Your OTP is: ' + this.otp);
    }

    onSubmit() {
      this.submitted = true;
      if (this.registerForm.valid) {
        if (this.registerForm.value.otp === this.generatedOtp) {
          console.log('Form Submitted:', this.registerForm.value);
          alert('Registration Successful!');
        } else {
          alert('Invalid OTP! Please enter the correct OTP.');
        }
      } else {
        console.log('Form Invalid');
      }
    }
  }


