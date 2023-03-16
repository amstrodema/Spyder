import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from '../models/registration';
import { ModelClass } from '../models/modelClass';
import { Wallet } from '../models/wallet';
import { RequestObject } from '../models/requestObject';
import { LoginVM } from '../models/loginVM';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

constructor(private httpClient: HttpClient) { }
// GetAllExams(): Observable<any> {
//   return this.httpClient.get(ModelClass.baseUrl+`api/Exam/GetExamsByNodeID?nodeID=`+ModelClass.GetUserProps().nodeID+`&userID=`+ ModelClass.GetUserProps().id);
// }

AddNewAccount(registration:Registration): Observable<any> {
  return this.httpClient.post(ModelClass.baseUrl+`api/user`, registration);
}

VerifyNewAccount(verificationcode:string): Observable<any> {
  return this.httpClient.get(ModelClass.baseUrl+`api/user/verifyemail?verificationcode=`+verificationcode);
}
ResetPassword(resetpasswordcode:string): Observable<any> {
  return this.httpClient.get(ModelClass.baseUrl+`api/user/resetpassword?resetpasswordcode=`+resetpasswordcode);
}
UpdatePassword(login:Login, userID: string): Observable<any> {
  let requestObj:RequestObject = ModelClass.GetRequestObject();
  requestObj.data =login;
  requestObj.userID =userID;

  return this.httpClient.post(ModelClass.baseUrl+`api/user/updatepassword`, requestObj);
}


// EditExam(exam:Exam): Observable<any> {
//   return this.httpClient.put(ModelClass.baseUrl+`api/Exam/ExamEdit`, exam);
// }
}
