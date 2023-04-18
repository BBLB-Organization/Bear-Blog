import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  imageURL = environment.imageURL;


  constructor(private http:HttpClient) { }

  getImageByName(name: string):Observable<Blob>{
    return this.http.get(this.imageURL+"?name="+name,{responseType: "blob"});
  }
}
