import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelClass } from '../models/modelClass';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private httpClient: HttpClient) { }

  GetAllNotificationByRecieverID(): Observable<any> {
    return this.httpClient.get(ModelClass.baseUrl+`api/notification/GetAllNotificationByRecieverID?id=`+ModelClass.user.id+"&appID="+ModelClass.clientSystem.appID);
  }

  GetAllNotificationAlert(): Observable<any> {
    return this.httpClient.get(ModelClass.baseUrl+`api/notification/GetAllNotificationAlert?id=`+ModelClass.user.id+"&appID="+ModelClass.clientSystem.appID);
  }
  // Comment(comment:Comment): Observable<any> {
  //   return this.httpClient.post(ModelClass.baseUrl+`api/comment`, comment);
  // }
}
