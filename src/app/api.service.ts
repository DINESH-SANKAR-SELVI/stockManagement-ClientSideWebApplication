import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyType, LoginResponseType, LoginType } from './data-types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data: FormData = new FormData();

  constructor(private httpMethods: HttpClient) { }

  loginServer(data: LoginType): Observable<LoginResponseType>{
    const headers = new HttpHeaders().set("userName", data.userName).set("password",data.password);
    return this.httpMethods.post<LoginResponseType>("login",{},{headers: headers});
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
