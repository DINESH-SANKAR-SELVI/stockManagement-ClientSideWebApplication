import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-message-logout',
  templateUrl: './message-logout.component.html',
  styleUrl: './message-logout.component.css'
})
export class MessageLogoutComponent {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private snackbarRef: MatSnackBarRef<MessageLogoutComponent>,
    private auth: AuthService,
    private router: Router
  ) { }

  confirmLogout() {
    this.auth.removeAllLocalStorage();
    this.snackbarRef.dismiss();
    this.router.navigate(['login']);
  }

  cancelLogOut() {
    this.snackbarRef.dismiss();
  }

}
