import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommonInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let baseUrl = localStorage.getItem("serverHostURL");

    const excludeAuth = request.url.includes('login') || request.url.includes('signup');
    if (!baseUrl) { baseUrl = "http://localhost/" }

    request = request.clone({
      url: `${baseUrl}${request.url}`
    });
    if (!excludeAuth) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.getAuthToken()}`
        }
      });
    }
    return next.handle(request);
  }
}
