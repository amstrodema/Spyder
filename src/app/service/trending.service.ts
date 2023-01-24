import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ModelClass } from "../models/modelClass";
import { RequestObject } from "../models/requestObject";

@Injectable({
  providedIn: "root"
})
export class TrendingService {
  requestObject: RequestObject = new RequestObject();
  constructor(private httpClient: HttpClient) {
  }

  GetTrending(): Observable<any> {
    this.requestObject = ModelClass.GetRequestObject();
    return this.httpClient.post(
      ModelClass.baseUrl + `api/generic/gettrending`,
      this.requestObject
    );
  }
}
