import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Image } from 'src/app/core/models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  imageURL = environment.imageURL;


  constructor(private http: HttpClient) { }

  getImageByName(name: string): Observable<Blob> {
    return this.http.get(this.imageURL + "?name=" + name, { responseType: "blob" });
  }

  getImageById(id: number): Observable<Blob> {
    return this.http.get(this.imageURL + "/" + id, { responseType: 'blob' });
  }

  getAllImageNames(): Observable<string[]> {
    return this.http.get<string[]>(this.imageURL + "/all");
  }

  uploadImage(file: File): Observable<Image> {
    const formData = new FormData();
    formData.append('fileName', file, file.name);
    return this.http.post<Image>(this.imageURL + "/upload", formData);
  }

}
