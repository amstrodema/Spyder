import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelClass } from '../models/modelClass';

@Injectable({
  providedIn: 'root'
})
export class FeatureGroupService {
  constructor(private httpClient: HttpClient) { }

  GetFeatureGroupByGroupNo(groupNo:number): Observable<any> {
    return this.httpClient.get(ModelClass.baseUrl+`api/featureGroup/GetFeatureGroupByGroupNo?groupNo=`+groupNo);
  }
}
