import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userContext: any;

  get value() { return localStorage.getItem('userContext') }

  decodedValue: string | undefined | null;

  constructor() { }

  isLoggedIn(): boolean {

    if (this.value != null) {
      this.decodedValue = atob(this.value)
      if (this.decodedValue) {
        this.userContext = JSON.parse(this.decodedValue);
        if (this.userContext != null || this.userContext != undefined) {
          if (this.userContext.isAuthendicated){
          return true;
          }
        }
      }
    }
    return false;
  }

  hasRole(role: string): boolean {
    if(this.isLoggedIn()){
      return this.userContext.role.includes(role);
    }
    return false;
  }
}
