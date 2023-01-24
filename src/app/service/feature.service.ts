import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelClass } from '../models/modelClass';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  constructor(private httpClient: HttpClient) { }

  GetFeatureTypesByGroupCode(type:string): Observable<any> {
    return this.httpClient.get(ModelClass.baseUrl+`api/featuretype/GetFeatureTypesByGroupCode?code=`+type);
  }
  }

