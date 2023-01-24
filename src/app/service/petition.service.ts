import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelClass } from '../models/modelClass';
import { HallRecord } from '../models/hall-record';
import { HttpClient } from '@angular/common/http';
import { Vote } from '../models/vote';
import { RequestObject } from '../models/requestObject';

@Injectable({
  providedIn: 'root'
})
export class PetitionService {
  requestObject: RequestObject = new RequestObject();
  constructor(private httpClient: HttpClient) {

   }

  NewPetition(hallRecord:HallRecord): Observable<any> {
    return this.httpClient.post(ModelClass.baseUrl+`api/petition`, hallRecord);
  }

  GetPetitionVMs(): Observable<any> {

    this.requestObject = ModelClass.GetRequestObject();
    return this.httpClient.post(ModelClass.baseUrl+`api/Petition/GetPetitionVMs`, this.requestObject);
  }
  // GetPetitions_LoggedIn(userID:string): Observable<any> {
  //   return this.httpClient.get(ModelClass.baseUrl+`api/Petition/GetPetitionVMs_LoggedIn?userID=`+userID);
  // }

  // GetPetition(petitionID:string): Observable<any> {
  //   return this.httpClient.get(ModelClass.baseUrl+`api/petition/id=`+ petitionID);
  // }


  GetPetitionDetailsVM(recordID:string): Observable<any> {
    this.requestObject = ModelClass.GetRequestObject();
    this.requestObject.itemID = recordID;
    return this.httpClient.post(ModelClass.baseUrl+`api/Petition/GetPetitionDetailsVM`, this.requestObject);
  }

  // GetPetitionDetailsVM_Logged(userID:string, recordID:string): Observable<any> {
  //   return this.httpClient.get(ModelClass.baseUrl+`api/Petition/GetPetitionDetailsVM_Logged?userID=`+userID+`&recordID=`+ recordID);
  // }

  VotePetition(vote:Vote): Observable<any> {
    return this.httpClient.post(ModelClass.baseUrl+`api/vote`, vote);
  }
}
