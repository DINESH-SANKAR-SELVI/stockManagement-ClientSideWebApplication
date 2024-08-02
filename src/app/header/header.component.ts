import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private snackBar: SnackbarService) { }

  ngOnInit(): void {
  }

  clearSession(){
    // localStorage.clear();
    // this.snackBar.openSnackBar("cleared");
    this.snackBar.OpenLogOutSnackBar();
  }
}
