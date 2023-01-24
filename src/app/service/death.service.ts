import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelClass } from '../models/modelClass';
import { HttpClient } from '@angular/common/http';
import { Death } from '../models/death';
import { RequestObject } from '../models/requestObject';

@Injectable({
  providedIn: 'root'
})
export class DeathService {
constructor(private httpClient: HttpClient) { }

GetDeathRecords(): Observable<any> {
  let requestObj:RequestObject = ModelClass.GetRequestObject();
  return this.httpClient.get(ModelClass.baseUrl+`api/death/GetDeathsWithCountry?countryID=`+requestObj.countryID);
}
GetDeathRecordDetails(itemID:string): Observable<any> {
  return this.httpClient.get(ModelClass.baseUrl+`api/death/`+itemID);
}
NewDeathRecord(death:Death): Observable<any> {
  return this.httpClient.post(ModelClass.baseUrl+`api/death`, death);
}
}
