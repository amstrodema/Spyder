import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlagReport } from '../models/flagReport';
import { Observable } from 'rxjs';
import { ModelClass } from '../models/modelClass';
import { RequestObject } from '../models/requestObject';

@Injectable({
  providedIn: 'root'
})
export class FlagReportService {

constructor(private httpClient: HttpClient) { }
FlagThisReport(flagReport:FlagReport): Observable<any> {

  let requestObj:RequestObject = ModelClass.GetRequestObject();
  requestObj.data = flagReport;
  requestObj.appID = ModelClass.clientSystem.appID;

  return this.httpClient.post(ModelClass.baseUrl+`api/flagreport`, requestObj);
}
}
