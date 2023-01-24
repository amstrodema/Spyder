import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from '../models/registration';
import { ModelClass } from '../models/modelClass';

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

// EditExam(exam:Exam): Observable<any> {
//   return this.httpClient.put(ModelClass.baseUrl+`api/Exam/ExamEdit`, exam);
// }
}
