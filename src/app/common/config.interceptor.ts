import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_USERS_URL = `${environment.apiUrl}`;

@Injectable()
export class ConfigInterceptor implements HttpInterceptor {
  loginUrl = `${API_USERS_URL}/api/auth/login`;
  offreurUrl = `${API_USERS_URL}/api/offreurs/save`;

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request) {
      request = request.clone({
        headers: request.headers.set('Access-Control-Allow-Origin', '*'),
      });
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // console.log("event ---->>", event);
        }
        return event;
      }),

      catchError((error: HttpErrorResponse) => {
        let data = {};

        data = {
          reason:
            (error && error.error ? error.error : '') +
            ' - ' +
            (error && error.message ? error.message : ''),
          status: error.status,
        };
        if (error.status == 500) {
          // this.sweetAlertService.showErrorAlert(
          //   "Warning !",
          //   "une erreur s'est produite , nous vous reviendrons plus tard "
          // );
        }

        // console.log("data: ", data);
        return throwError(() => error);
      })
    );
  }


}
