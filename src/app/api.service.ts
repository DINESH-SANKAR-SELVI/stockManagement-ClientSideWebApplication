import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyType, LoginResponseType, LoginType, RegisterUserType } from './data-types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data: FormData = new FormData();

  constructor(private httpMethods: HttpClient) { }

  loginServer(data: LoginType): Observable<LoginResponseType> {
    const headers = new HttpHeaders().set("loginId", data.loginId).set("password",data.password);
    return this.httpMethods.post<LoginResponseType>("login",{},{headers: headers});
  }

  registerUser(data: RegisterUserType): Observable<LoginResponseType> {
    return this.httpMethods.post<LoginResponseType>('signup',data);
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
