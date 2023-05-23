import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/core/models/blog';
import { BlogService } from 'src/app/core/services/blog-service/blog.service';

@Component({
  selector: 'app-create-comments',
  templateUrl: './create-comments.component.html',
  styleUrls: ['./create-comments.component.css']
})
export class CreateCommentsComponent implements OnInit {

  blogId: number | undefined;
  showCommentPage: boolean = false;
  singleBlog: Blog = {
    id: undefined,
    blogTitle: "",
    blogText: "",
    imageId: undefined,
    tagListId: undefined,
    commentId: undefined,
    userName: "",
    createdOn: new Date()
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadBlogById();
  }

  loadBlogById() {
    let id = this.activatedRoute.snapshot.paramMap.get("blogId");
    const numberValue: number | undefined = id !== null ? parseInt(id, 10) : undefined;
    this.blogId = numberValue;
    this.blogService.getBlogById(this.blogId).subscribe({
      next: (res: Blog) => {
        this.singleBlog = res;
        this.showCommentPage = true;
      },
      error: (msg: any) => {
        this.showCommentPage = false;
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 3000);
      }
    }

    )
  }

}
