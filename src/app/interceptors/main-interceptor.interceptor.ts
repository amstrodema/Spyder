import { LoaderService } from './../service/loader.service';
import { ModelClass } from 'src/app/models/modelClass';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class MainInterceptorInterceptor implements HttpInterceptor {

  constructor(private loaderService:LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone({
      headers: request.headers
      .set('Content-Type','application/json')
      .set('ApiKey','931d3a6f-ba57-4908-923b-c1fea1e3f3ed')
    });

    this.loaderService.show();
    return next.handle(req).pipe(
      finalize(()=> this.loaderService.hide())
    );
  }
}
