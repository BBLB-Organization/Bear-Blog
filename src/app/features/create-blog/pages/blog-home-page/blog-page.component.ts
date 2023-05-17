import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/core/models/blog';
import { Tag } from 'src/app/core/models/tag';
import { BlogService } from 'src/app/core/services/blog-service/blog.service';
import { ImageService } from 'src/app/core/services/image-service/image.service';
import { TagService } from 'src/app/core/services/tag-service/tag.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  listOfBlogs: Blog[] = [];
  tagListPerBlog: string = "";
  blogInfo: Blog = {
    id: undefined,
    blogTitle: "",
    blogText: "",
    imageId: undefined,
    tagListId: undefined,
    commentId: undefined
  }

  constructor(
    private blogService: BlogService,
    private imageService: ImageService,
    private tagService: TagService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAllBlogs();
  }

  loadAllBlogs() {
    this.blogService.getAllBlogs().subscribe((res: Blog[]) => {
      this.listOfBlogs = res;
    });
  }

  navigateToCommentPage(blogId: number | undefined){
    this.router.navigate([blogId+'/comments']);
  }

}

