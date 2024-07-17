import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { companyType } from '../data-types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  companyTypeList!: companyType[];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
      this.api.getCompanyTypes().subscribe(result => {
        this.companyTypeList = result;
      },
      (error) => {
        console.error('Error fetching company types:', error);
       
        this.companyTypeList = error.error;
      });
  }
}
