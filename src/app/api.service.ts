import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyType } from './data-types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpMethods: HttpClient) { }

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
