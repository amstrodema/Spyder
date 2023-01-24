import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelClass } from '../models/modelClass';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {
  constructor(private httpClient: HttpClient) { }

  GetParamsByCode(code: string): Observable<any> {
    return this.httpClient.get(ModelClass.baseUrl+`api/Params/GetParamsByCode?code=`+code);
  }
}
