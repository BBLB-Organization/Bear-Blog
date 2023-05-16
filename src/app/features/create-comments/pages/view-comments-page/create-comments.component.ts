import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/core/models/blog';
import { BlogService } from 'src/app/core/services/blog-service/blog.service';

@Component({
  selector: 'app-create-comments',
  templateUrl: './create-comments.component.html',
  styleUrls: ['./create-comments.component.css']
})
export class CreateCommentsComponent implements OnInit {

  blogId: number | undefined;
  showCommentPage: boolean = true;
  singleBlog: Blog = {
    id: undefined,
    blogTitle: "",
    blogText: "",
    imageId: undefined,
    tagListId: undefined
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService
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
      },
      error: (msg: any) => {
        this.showCommentPage = false;
      }
    }

    )
  }

}
