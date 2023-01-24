import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelClass } from '../models/modelClass';
import { Vote } from '../models/vote';
import { RequestObject } from '../models/requestObject';

@Injectable({
  providedIn: 'root'
})
export class HallService {

  constructor(private httpClient: HttpClient) { }
  requestObject:RequestObject = new RequestObject();

  GetHalls(): Observable<any> {
    return this.httpClient.get(ModelClass.baseUrl+`api/hall`);
  }
  GetHallMembers(route:string): Observable<any> {

    this.requestObject = ModelClass.GetRequestObject();
    this.requestObject.data = route;

    return this.httpClient.post(ModelClass.baseUrl+`api/Hall/GetHallMemberVMs`, this.requestObject);
  }

  GetHallMemberDetailsVM(recordID:string): Observable<any> {
    this.requestObject = ModelClass.GetRequestObject();
      this.requestObject.itemID = recordID;
    return this.httpClient.post(ModelClass.baseUrl+`api/Hall/GetHallMemberDetailsVM`,this.requestObject);
  }

  VoteHall(vote:Vote): Observable<any> {
    return this.httpClient.post(ModelClass.baseUrl+`api/vote`, vote);
  }
}
