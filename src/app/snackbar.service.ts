import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  // openSnackBar() {
  //   this._snackBar.openFromComponent(PizzaPartyComponent, {
  //     duration: this.durationInSeconds * 1000,
  //   });
  // }
}
