import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  commentURL = environment.commentURL;

  commentHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  saveComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.commentURL, comment, this.commentHeaders);
  }

  getAllCommentsPerBlogId(blogId: number | undefined): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentURL + "/" + blogId);
  }

}
