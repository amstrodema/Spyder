import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelClass } from '../models/modelClass';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  GetProfileContent(userID): Observable<any> {
    return this.httpClient.get(ModelClass.baseUrl+`api/generic/GetProfileContent?userID=`+userID);
  }

  GetProfileContentWithComment(userID): Observable<any> {
    return this.httpClient.get(ModelClass.baseUrl+`api/generic/GetProfileContentWithComment?userID=`+userID);
  }

  GetProfileContentWithReaction(userID): Observable<any> {
    return this.httpClient.get(ModelClass.baseUrl+`api/generic/GetProfileContentWithReaction?userID=`+userID);
  }
  GetUserProfile(userID:string): Observable<any> {
    return this.httpClient.get(ModelClass.baseUrl+`api/user/GetUserProfile?userID=`+ userID);
  }
}
