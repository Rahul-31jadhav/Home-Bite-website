import { Component } from '@angular/core';
import { NgOtpInputModule } from 'ng-otp-input';

@Component({
  selector: 'app-auth',
  imports: [NgOtpInputModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {


  otp: string = '';

  otpConfig = {
    length: 4,
    allowNumbersOnly: true,
    isPasswordInput: false,
    disableAutoFocus: false,
    inputStyles: {
      width: '40px',
      height: '40px',
      margin: '0 5px',
      fontSize: '20px',
      borderRadius: '5px',
      border: '1px solid #ced4da'
    }
  };

  onOtpChange(otpValue: string) {
    this.otp = otpValue;
  }

  clearOtp() {
    this.otp = '';
    console.log("OTP Cleared");
  }

  verifyOtp() {
    alert("OTP Submitted: " + this.otp);
  }
}
