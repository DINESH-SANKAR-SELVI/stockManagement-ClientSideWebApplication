import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../snackbar.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // userName: String ='user_name';

  constructor(private snackBar: SnackbarService, public auth: AuthService) { }

  ngOnInit(): void {
    console.log("header", this.auth.getUserName())
  }

  clearSession(){
    this.snackBar.OpenLogOutSnackBar();
  }
}
