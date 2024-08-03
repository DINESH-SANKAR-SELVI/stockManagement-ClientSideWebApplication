import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  registerForm!: FormGroup;
  hide: boolean = true;

  constructor(private _formBuilder: FormBuilder, private dialogRef: MatDialogRef<SignupComponent>) {

    this.registerForm = this._formBuilder.group({
      loginId: ['', Validators.required],
      password: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  makeSignUp() {
    if (this.registerForm.valid) {
      this.dialogRef.close(this.registerForm.getRawValue());
    } else {
      console.error('Register Form is invalid..!');
    }
  }

  changeVisibility() {
    this.hide = this.hide ? false : true
  }

}