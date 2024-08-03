import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { LoginResponseType } from './data-types';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userContext: any;

  get value() { return localStorage.getItem('userContext') }

  decodedValue: string | undefined | null;

  constructor() { }

  setContextPath(pathurl: string = 'https://stockmanagement-server.onrender.com/') {
    localStorage.setItem('serverHostURL', pathurl);
  }

  setUserContext(userContext: LoginResponseType) {
    localStorage.setItem('userContext', btoa(JSON.stringify(userContext)));
  }

  removeAllLocalStorage() {
    localStorage.clear();
    this.setContextPath();
  }

  isLoggedIn(): boolean {
    if (this.value != null) {
      this.decodedValue = atob(this.value)
      if (this.decodedValue) {
        this.userContext = JSON.parse(this.decodedValue);
        if (this.userContext != null || this.userContext != undefined) {
          if (this.userContext.isAuthendicated) {
            return true;
          }
        }
      }
    }
    return false;
  }

  getAuthToken(): string {
    if (this.value != null) {
      this.decodedValue = atob(this.value)
      if (this.decodedValue) {
        this.userContext = JSON.parse(this.decodedValue);
        if (this.userContext != null || this.userContext != undefined) {
          return this.userContext.token
        }
      }
    }
    return "";
  }

  getUserName(): String {
    let token = this.getAuthToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      console.log(decodedToken)
      return decodedToken.sub;
    }
    return ""
  }

  hasRole(role: string): boolean {
    if (this.isLoggedIn()) {
      try {
        const decodedToken: any = jwtDecode(this.userContext.token);

        if (decodedToken.roles) {
          const rolesArray = decodedToken.roles.split(',');
          return rolesArray.includes(role);
        }
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
    return false;
  }
}