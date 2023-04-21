import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/core/models/blog';
import { BlogService } from 'src/app/core/services/blog-service/blog.service';
import { ImageService } from 'src/app/core/services/image-service/image.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  
  listOfBlogs: Blog[] = [];
  blogInfo: Blog = {
    id: undefined,
    blogTitle: "",
    blogText: "",
    imageId: undefined
  }

  constructor(private blogService: BlogService, private imageService: ImageService) { }

  ngOnInit(): void {
    this.loadAllBlogs();
  }

  loadAllBlogs() {
    this.blogService.getAllBlogs().subscribe((res: Blog[]) => {
      this.listOfBlogs = res;
    })
  }


}

