import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelClass } from '../models/modelClass';
import { MarriageVM } from '../models/marriageVM';
import { RequestObject } from '../models/requestObject';

@Injectable({
  providedIn: 'root'
})
export class MarriageService {

constructor(private httpClient: HttpClient) { }
GetMarriages(): Observable<any> {
  let requestObj:RequestObject = ModelClass.GetRequestObject();
  return this.httpClient.get(ModelClass.baseUrl+`api/marriage/GetMarriagesWithCountry?countryID=`+requestObj.countryID);
}

GetMarriageVMByID(itemID:string): Observable<any> {
  return this.httpClient.get(ModelClass.baseUrl+`api/marriage/GetMarriageVMByID?id=`+itemID);
}
NewMarriage(marriageVM:MarriageVM): Observable<any> {

  let requestObj:RequestObject = ModelClass.GetRequestObject();
  requestObj.data = marriageVM;
  requestObj.appID = ModelClass.clientSystem.appID;

  return this.httpClient.post(ModelClass.baseUrl+`api/marriage`, requestObj);
}
}
