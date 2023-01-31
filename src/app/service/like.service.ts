import { Injectable } from '@angular/core';
import { RequestObject } from '../models/requestObject';
import { HttpClient } from '@angular/common/http';
import { ModelClass } from '../models/modelClass';
import { Observable } from 'rxjs';
import { Vote } from '../models/vote';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  requestObject: RequestObject = new RequestObject();
  constructor(private httpClient: HttpClient) {
    try {
    this.requestObject.userID = ModelClass.user.id;
    } catch (error) {

    }
   }

   Like(like:Vote, authorID: string): Observable<any> {
    let requestObj:RequestObject = ModelClass.GetRequestObject();
    requestObj.data = like;
    requestObj.appID = ModelClass.clientSystem.appID;
    requestObj.authorID = authorID;

    return this.httpClient.post(ModelClass.baseUrl+`api/like`, requestObj);
  }
}
