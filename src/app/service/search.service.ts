import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelClass } from '../models/modelClass';
import { RequestObject } from '../models/requestObject';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  GetCommentVMsByItemID(itemID:string): Observable<any> {
    return this.httpClient.get(ModelClass.baseUrl+`api/comment/GetCommentVMsByItemID?itemID=`+itemID);
  }
  GlobalSearch(searchstring): Observable<any> {
    let requestObject: RequestObject = ModelClass.GetRequestObject();
    requestObject.data = searchstring;
    return this.httpClient.post(ModelClass.baseUrl+`api/generic/GetSearchResult`, requestObject);
  }
}
