import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelClass } from '../models/modelClass';
import { Setting } from '../models/setting';
import { RequestObject } from '../models/requestObject';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private httpClient: HttpClient) { }

  GetSettings(): Observable<any> {
    return this.httpClient.get(ModelClass.baseUrl+`api/settings/GetSettingsByUserID?userID=`+ModelClass.user.id);
  }
  PutSettings(setting:Setting): Observable<any> {

    let requestObj:RequestObject = ModelClass.GetRequestObject();
    requestObj.data = setting;
    requestObj.appID = ModelClass.clientSystem.appID;

    return this.httpClient.put(ModelClass.baseUrl+`api/settings/`+ setting.id, requestObj);
  }
}
