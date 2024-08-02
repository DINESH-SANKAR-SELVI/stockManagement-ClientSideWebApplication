import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../snackbar.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName: String ='user_name';
  constructor(private snackBar: SnackbarService, private auth: AuthService) { }

  ngOnInit(): void {
    this.userName = this.auth.getUserName();
    console.log(this.userName)
  }

  clearSession(){
    this.snackBar.OpenLogOutSnackBar();
  }
}
