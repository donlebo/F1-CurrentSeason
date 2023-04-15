import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../providers/auth-service.service';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthServiceService) {}


  intercept(request: HttpRequest<any>, next: HttpHandler) {

    const token = this.authService.getToken();

/*     if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    } */

    console.log('TokenInterceptor called\nYour token is: ', token );

    return next.handle(request);
  }
}
