import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelClass } from '../models/modelClass';
import { Comment } from '../models/comment';
import { RequestObject } from '../models/requestObject';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private httpClient: HttpClient) { }

  GetCommentVMsByItemID(itemID:string): Observable<any> {
    return this.httpClient.get(ModelClass.baseUrl+`api/comment/GetCommentVMsByItemID?itemID=`+itemID);
  }
  Comment(comment:Comment, authorID:string): Observable<any> {
    let requestObj:RequestObject = ModelClass.GetRequestObject();
    requestObj.data = comment;
    requestObj.appID = ModelClass.clientSystem.appID;
    requestObj.authorID = authorID;

    return this.httpClient.post(ModelClass.baseUrl+`api/comment`, requestObj);
  }
}
