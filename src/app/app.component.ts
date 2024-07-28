import { Component, OnInit } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    localStorage.clear();
    localStorage.setItem('serverHostURL', 'https://stockmanagement-server.onrender.com/');
  }

  // isSideNavCollapsed = false;
  // screenWidth = 0;

  // onToggleSideNav(data: SideNavToggle): void {
  //   this.screenWidth = data.screenWidth;
  //   this.isSideNavCollapsed = data.collapsed;
  // }
}
