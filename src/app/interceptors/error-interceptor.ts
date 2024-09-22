import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { catchError, Observable, throwError } from "rxjs";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor
{
  constructor(private toastr: ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Something went wrong';

        if (error.error instanceof ErrorEvent) {
          errorMessage = `${error.error.message}`;
        } else {
          if (error.status === 500) {
            const regex = /:(.*?)\r\n/;
            const match = error.error.match(regex);

            if (match && match[1]) {
              errorMessage = match[1].trim();
            }
          } else if (error.status === 400) {
            errorMessage = error.error?.message || 'Invalid request';
          }
        }

        this.toastr.error(errorMessage, `Erro ${error.status}`);
        return throwError(() => error);
      })
    );
  }
}
