import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { LoginType, RegisterUserType } from '../data-types';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { SnackbarService } from '../snackbar.service';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { NavigatorService } from '../navigator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginId!: string;
  password!: string;
  hide = true;

  constructor(
    private api: ApiService,
    private router: Router,
    private auth: AuthService,
    private snackbar: SnackbarService,
    private dialog: MatDialog,
    private navigator: NavigatorService
  ) { }

  onSubmit() {
    if (this.loginId && this.password) {
      this.api.loginServer({ loginId: this.loginId, password: this.password } as LoginType)
        .subscribe(response => {
          this.auth.setUserContext(response);
          this.navigator.toDashboard();
          this.snackbar.openSnackBar(this.loginId.concat(" LogIn Successfully..!"));
        }, (error) => {
          console.error(error);
          this.snackbar.openSnackBar(this.loginId.concat(" Login Failed..!"));
        });
    }
  }


  makeSignup() {
    const dialogRef = this.dialog.open(SignupComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.api.registerUser(result as RegisterUserType).subscribe(response => {
        this.auth.setUserContext(response);
        this.navigator.toDashboard();
        this.snackbar.openSnackBar(this.loginId.concat(" LogIn Successfully..!"));
      }, (error) => {
        console.error(error);
        this.snackbar.openSnackBar(this.loginId.concat(" Login Failed..!"));
      });
    });
  }

  changeVisibility() {
    this.hide = this.hide ? false : true
  }
}
