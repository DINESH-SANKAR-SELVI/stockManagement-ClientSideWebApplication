import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyType } from './data-types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpMethods: HttpClient) { }

  getAllCompanys(): Observable<CompanyType[]>{
    return this.httpMethods.get<CompanyType[]>("https://stockmanagement-server.onrender.com/company");
  }

  newCompanyFactory(data: CompanyType): Observable<CompanyType> {
    return this.httpMethods.post<CompanyType>("https://stockmanagement-server.onrender.com/company",data);
  }
}
