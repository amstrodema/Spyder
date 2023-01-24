import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelClass } from '../models/modelClass';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private httpClient: HttpClient) { }

  LogOut(userID:string): Observable<any> {
    return this.httpClient.get(ModelClass.baseUrl+`api/User/LogOut?userID=`+userID);
  }
}
