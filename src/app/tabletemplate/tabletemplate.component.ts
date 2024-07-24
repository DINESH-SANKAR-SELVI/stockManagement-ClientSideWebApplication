import { Component } from '@angular/core';
import { ApiService } from '../api.service';

interface MyData {
  key1: string;
  key2: string;
  key3: string;
}

@Component({
  selector: 'app-tabletemplate',
  templateUrl: './tabletemplate.component.html',
  styleUrl: './tabletemplate.component.css'
})
export class TabletemplateComponent {

  displayedColumns !: (keyof MyData)[];
  dataSource !: MyData[];

  constructor(private api: ApiService) {
    this.api.getAllCompaniesAsList().subscribe(result => {
      this.displayedColumns = Object.keys(result[0]) as (keyof MyData)[];
      this.dataSource = result;
    });
  }
}