import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  isLinear = false;

  @Output() onEmailSubmit: EventEmitter<string> = new EventEmitter();
  @Output() onCodeSubmit = new EventEmitter();

  @Input() emailSubmitted: boolean = false;
  @Input() passwordResetSuccessful: boolean = false;

  emailForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  confirmCodeForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    confirmationCode: new FormControl('', [Validators.required]),
  });

  submitEmail() {
    if (this.emailForm.valid) {
      const email = this.emailForm.get('email')!.value;
      this.confirmCodeForm.get('email')!.setValue(email);
      this.onEmailSubmit.emit(email);
      this.confirmCodeForm.updateValueAndValidity();
    }
  }

  submitCode() {
    if (this.confirmCodeForm.valid) {
      this.onCodeSubmit.emit(this.confirmCodeForm.value);
    }
  }
}
