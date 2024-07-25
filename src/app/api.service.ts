import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyType, LoginType } from './data-types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  data: FormData = new FormData();

  constructor(private httpMethods: HttpClient) { }

  loginServer(data: LoginType): Observable<any>{
    
    this.data.set("username",data.username);
    this.data.set("password",data.password);

    return this.httpMethods.post<Observable<any>>("login",this.data, { observe: 'response' });
  }

  getAllCompaniesAsList(): Observable<any>{
    return this.httpMethods.get<any>("company/list");
  }

  getAllCompanies(): Observable<CompanyType[]>{
    return this.httpMethods.get<CompanyType[]>("company");
  }

  newCompanyFactory(data: CompanyType): Observable<CompanyType> {
    return this.httpMethods.post<CompanyType>("company",data);
  }
}
