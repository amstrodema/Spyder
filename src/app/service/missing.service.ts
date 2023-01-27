import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ModelClass } from '../models/modelClass';
import { MissingVM } from '../models/missingVM';
import { RequestObject } from '../models/requestObject';

@Injectable({
  providedIn: 'root'
})
export class MissingService {
  requestObject: RequestObject = new RequestObject();
  constructor(private httpClient: HttpClient) {
   }

  GetMissingDetails(itemTypeID:string): Observable<any> {
    this.requestObject = ModelClass.GetRequestObject();
    this.requestObject.data = 0;
    this.requestObject.itemID = itemTypeID;
    return this.httpClient.post(ModelClass.baseUrl+`api/missing/GetMissingDetails`,this.requestObject);
  }

  GetMissingByItemGroupID(itemTypeID:string, awarenessTypeNo:number): Observable<any> {
    this.requestObject = ModelClass.GetRequestObject();
    this.requestObject.data = awarenessTypeNo;
    this.requestObject.itemID = itemTypeID;
    this.requestObject.countryID = ModelClass.settings.viewCountryID;

    return this.httpClient.post(ModelClass.baseUrl+`api/missing/GetMissingByItemTypeID`,this.requestObject);
  }
  NewMissing(missingVM:MissingVM): Observable<any> {

    let requestObj:RequestObject = ModelClass.GetRequestObject();
    requestObj.data = missingVM;
    requestObj.appID = ModelClass.clientSystem.appID;

    return this.httpClient.post(ModelClass.baseUrl+`api/missing`, requestObj);
  }

}
