import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelClass } from '../models/modelClass';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private httpClient: HttpClient) { }

Login(login:Login): Observable<any> {
  return this.httpClient.post(ModelClass.baseUrl+`api/user/login`, login);
}

ForgotPassword(email:string): Observable<any> {
  return this.httpClient.get(ModelClass.baseUrl+`api/user/forgotpassword?email=`+ email);
}

ResendVerification(email:string): Observable<any> {
  return this.httpClient.get(ModelClass.baseUrl+`api/user/resendemailverification?email=`+ email);
}

}
