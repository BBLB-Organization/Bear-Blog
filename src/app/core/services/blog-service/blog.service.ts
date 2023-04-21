import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Blog } from '../../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogURL = environment.blogURL;
  blogHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private http:HttpClient) { }

  postBlog(blog: Blog):Observable<Blog>{
    return this.http.post<Blog>(this.blogURL, blog, this.blogHeaders);
  }

  getAllBlogs():Observable<Blog[]>{
    return this.http.get<Blog[]>(this.blogURL);
  }

}
