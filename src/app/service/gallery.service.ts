import { Injectable } from '@angular/core';
import { RequestObject } from '../models/requestObject';
import { HttpClient } from '@angular/common/http';
import { ModelClass } from '../models/modelClass';
import { Image } from '../models/image';
import { Observable } from 'rxjs';
import { Link } from '../models/link';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  requestObject: RequestObject = new RequestObject();
  constructor(private httpClient: HttpClient) {
    try {
    this.requestObject.userID = ModelClass.user.id;
    } catch (error) {

    }
   }

   GetGallery(itemID:string): Observable<any> {
    return this.httpClient.get(ModelClass.baseUrl+`api/image/GetGallery?itemID=`+ itemID);
  }

   SaveImage(image:Image): Observable<any> {
    return this.httpClient.post(ModelClass.baseUrl+`api/image`, image);
  }
  SaveLink(link:Link): Observable<any> {
    return this.httpClient.post(ModelClass.baseUrl+`api/link`, link);
  }
}
