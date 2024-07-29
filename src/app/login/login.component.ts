import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { LoginType } from '../data-types';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private api: ApiService, private router: Router, private auth: AuthService, private snackbar: SnackbarService) { }

  onSubmit() {
    if (this.username && this.password) {
      this.api.loginServer({ userName: this.username, password: this.password } as LoginType)
        .subscribe(response => {
          localStorage.setItem('userContext', btoa(JSON.stringify(response)));
          this.router.navigate(['dashboard']);
          this.snackbar.openSnackBar(this.username.concat(" LogIn Successfully..!"));
        }, (error) => {
          console.error(error);
          this.snackbar.openSnackBar(this.username.concat(" Login Failed..!"));
        });
    }
  }
}
