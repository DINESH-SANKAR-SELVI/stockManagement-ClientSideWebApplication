import { Component, Inject, inject } from '@angular/core';
import { SnackbarService } from '../snackbar.service';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private snackbar: SnackbarService) { }

}

@Component({
  selector: 'app-msg-logout',
  template: `<h2> {{data.message}}</h2>
            <button class="btn btn-danger m-3" (click)="confirmLogout()">{{data.buttonText}}</button> 
            <button class='btn btn-secondary' (click)="cancelLogOut()">Cancel</button>`,
  styles:`h2{ color: 'red'}`
})
export class MessageLogoutComponent{

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private snackbarRef: MatSnackBarRef<MessageLogoutComponent>,
    private auth: AuthService,
    private router: Router
  ) { }

 confirmLogout(){
  this.auth.removeAllLocalStorage();
  this.snackbarRef.dismiss();
  this.router.navigate(['login']);
 }

 cancelLogOut(){
  this.snackbarRef.dismiss();
 }

}
