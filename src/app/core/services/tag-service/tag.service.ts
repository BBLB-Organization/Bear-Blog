import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tag } from '../../models/tag';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  tagURL = environment.tagURL;
  blogHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  saveTagList(tagList: Tag): Observable<Tag> {
    return this.http.post<Tag>(this.tagURL, tagList, this.blogHeaders);
  }

  getTagListById(id: number): Observable<Tag> {
    return this.http.get<Tag>(this.tagURL + "/" + id);
  }

}
