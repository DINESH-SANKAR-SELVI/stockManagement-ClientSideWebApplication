import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faLocation,
  faShop,
  faBoxes,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss']
})
export class TopWidgetsComponent implements OnInit {

  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToCompany(){
    this.router.navigate(['./company']);
  }

}
