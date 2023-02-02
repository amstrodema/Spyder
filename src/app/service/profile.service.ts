import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelClass } from '../models/modelClass';
import { Image } from '../models/image';
import { RequestObject } from '../models/requestObject';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  GetProfileContent(profileUserID): Observable<any> {
    if (ModelClass.user != null) {
    return this.httpClient.get(ModelClass.baseUrl+`api/generic/GetProfileContent?userID=`+ModelClass.user.id+'&appID='+ModelClass.clientSystem.appID+'&profileUserID='+profileUserID);

    } else {
    return this.httpClient.get(ModelClass.baseUrl+`api/generic/GetProfileContent?profileUserID=`+profileUserID);
    }
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

  SetUserImage(img:string): Observable<any> {

    let requestObj:RequestObject = ModelClass.GetRequestObject();

    let image: Image = new Image();
    image.original = img;
    image.createdBy = ModelClass.user.id

    requestObj.data = image;
    requestObj.appID = ModelClass.clientSystem.appID;

    return this.httpClient.post(ModelClass.baseUrl+`api/user/SetUserImage`, requestObj);
  }
}
