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
      // this.api.loginServer({ username: this.username, password: this.password } as LoginType)
      // .subscribe(response =>{ console.log(response)
      localStorage.setItem('userContext', btoa(JSON.stringify({ userName: this.username, password: this.password, role: ['Developer'], isAuthendicated: true })));

      this.router.navigate(['dashboard']);
      this.snackbar.openSnackBar(this.username.concat(" LogIn Successfully..!"));

      // });
    }
  }
}
