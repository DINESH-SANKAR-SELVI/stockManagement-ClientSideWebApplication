import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageLogoutComponent } from './message-logout/message-logout.component';

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
        message: "Do You Want End Your Session..!",
        successButtonText: "Yes",
        FaildedButtonText: "No"
      },
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
