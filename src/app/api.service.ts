import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { companyType } from './data-types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpHeaders: HttpHeaders = new HttpHeaders();

  constructor(private HttpMethod: HttpClient) { }

  getCompanyTypes(): Observable<companyType[]> {
    this.httpHeaders.set("Content-Type", "application/json");

    return this.HttpMethod.get<companyType[]>("https://stockmanagement-server.onrender.com/company-type",{ headers: this.httpHeaders});
  }
}
