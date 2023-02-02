import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelClass } from '../models/modelClass';
import { RequestObject } from '../models/requestObject';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {
  constructor(private httpClient: HttpClient) { }

  GetParamsByCode(code: string): Observable<any> {
    let requestObj:RequestObject = ModelClass.GetRequestObject();
    requestObj.data = code;
    requestObj.appID = ModelClass.clientSystem.appID;
    requestObj.userID = ModelClass.user.id;

    return this.httpClient.post(ModelClass.baseUrl+`api/Params/GetParamsByCode`, requestObj);
  }
}
