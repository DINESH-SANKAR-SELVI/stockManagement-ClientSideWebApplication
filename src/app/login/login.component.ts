import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { LoginType } from '../data-types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private api: ApiService, private router: Router) { }

  onSubmit() {
    console.log('Form submitted');
    if (this.username && this.password) {
      this.api.loginServer({ username: this.username, password: this.password } as LoginType)
      .subscribe(response =>{ console.log(response)
        
        this.router.navigate(['/']);
      });
    }
  }
}
