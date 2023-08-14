import { TestBed } from '@angular/core/testing';

import { BlogService } from './blog.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Blog } from '../../models/blog';

describe('BlogService', () => {
  let service: BlogService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BlogService);
    http = TestBed.inject(HttpClient);
  });

  const fakeBlog: Blog = {
    id: 1,
    blogText: 'Blog text',
    blogTitle: 'Blog title',
    imageId: 2,
    tagListId: 3,
    commentId: '4',
    userName: 'username',
    createdOn: new Date()
  }

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should post a blog given the current blog information', () => {
    spyOn(http, 'post').and.returnValue(of(fakeBlog));
    service.postBlog(fakeBlog).subscribe({
      next: (res: any) => {
        expect(res).toEqual(fakeBlog);
      }
    })
  });

  it('should update blog information when users creates a new comment to the blog they are responding to', () => {
    let updatedBlog = fakeBlog;
    updatedBlog.commentId = '4,5';
    spyOn(http, 'put').and.returnValue(of(updatedBlog));
    service.updateBlogWithCommentId(1, updatedBlog).subscribe({
      next: (res: Blog) => {
        expect(res.commentId).toEqual('4,5');
      }
    })
  });

});
