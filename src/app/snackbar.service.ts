import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageLogoutComponent } from './signup/signup.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Ok', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3 * 1000
    });
  }

  OpenLogOutSnackBar() {
    this._snackBar.openFromComponent(MessageLogoutComponent, {
      data: {
        message: "Your Session Was Ended..!",
        buttonText: "Okay"
      },
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
