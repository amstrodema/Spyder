import { RequestObject } from "./../models/requestObject";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ModelClass } from "../models/modelClass";
import { Confession } from "../models/confession";

@Injectable({
  providedIn: "root"
})
export class ConfessionServiceService {
  requestObject: RequestObject = new RequestObject();
  constructor(private httpClient: HttpClient) {
  }

  GetConfessionHeadLines(dialogueTypeNo: number): Observable<any> {
    this.requestObject = ModelClass.GetRequestObject();
    this.requestObject.data = dialogueTypeNo;

    return this.httpClient.post(
      ModelClass.baseUrl + `api/confession/GetHeadLines`,
      this.requestObject
    );
  }

  GetConfessionDetails(itemID: string): Observable<any> {
    var val: string = "";
    this.requestObject = ModelClass.GetRequestObject();
    this.requestObject.data = val;
    this.requestObject.itemID = itemID;
    return this.httpClient.post(
      ModelClass.baseUrl + `api/confession/GetConfessionDetails`,
      this.requestObject
    );
  }
  GetConfessionByID(ID: string): Observable<any> {
    return this.httpClient.get(ModelClass.baseUrl + `api/confession/` + ID);
  }

  Confess(confession: Confession): Observable<any> {
    return this.httpClient.post(
      ModelClass.baseUrl + `api/confession`,
      confession
    );
  }
}
