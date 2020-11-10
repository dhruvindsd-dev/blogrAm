import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, take } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';

@Injectable()
export class httpConfigInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        if (user) {
          return next.handle(
            request.clone({
              headers: request.headers.set(
                'Authorization',
                `Token ${user.token}`
              ),
            })
          );
        }
        return next.handle(request);
      })
    );
  }
}
