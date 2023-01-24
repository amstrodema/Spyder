import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlagReport } from '../models/flagReport';
import { Observable } from 'rxjs';
import { ModelClass } from '../models/modelClass';

@Injectable({
  providedIn: 'root'
})
export class FlagReportService {

constructor(private httpClient: HttpClient) { }
FlagThisReport(flagReport:FlagReport): Observable<any> {
  return this.httpClient.post(ModelClass.baseUrl+`api/flagreport`, flagReport);
}
}
