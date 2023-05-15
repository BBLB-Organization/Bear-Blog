import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Blog } from 'src/app/core/models/blog';
import { Image } from 'src/app/core/models/image';
import { BlogService } from 'src/app/core/services/blog-service/blog.service';
import { ImageService } from 'src/app/core/services/image-service/image.service';
import { ToasterComponent } from 'src/app/shared/toaster/toaster.component';

@Component({
  selector: 'app-create-blog-page',
  templateUrl: './create-blog-page.component.html',
  styleUrls: ['./create-blog-page.component.css']
})
export class CreateBlogPageComponent implements OnInit {

  selectedFile!: File;
  foreignKeyImageId: number | undefined;
  newBlog: Blog = {
    id: undefined,
    blogTitle: "",
    blogText: "",
    imageId: undefined
  };

  message = "Test error";
  title = "Test error title";
  @ViewChild(ToasterComponent)toasterComponent: ToasterComponent = new ToasterComponent;

  blogForm: FormGroup = this.fb.group({
    blogTitle: ['', Validators.required],
    blogText: ['', Validators.required]
  },
    { updateOn: 'submit' }
  );

  get blogTitle(): string { return this.blogForm.get('blogTitle')?.value; }

  get blogText(): string { return this.blogForm.get('blogText')?.value; }


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private imageService: ImageService,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
  }

  openToaster(){
    this.toasterComponent.openToaster();
  }

  setSelectedFile(file: File) {
    this.selectedFile = file;
  }

  submitBlog() {
    if (this.blogForm.valid) {
      this.newBlog.blogTitle = this.blogTitle;
      this.newBlog.blogText = this.blogText;
      if (this.selectedFile != null) {
        this.imageService.uploadImage(this.selectedFile).subscribe(
          (response: Image) => {
            console.log('Upload successful', response);
            this.newBlog.imageId = response.id;
            this.blogService.postBlog(this.newBlog).subscribe((res) => {
              console.log('Post blog successful', res);
            });
          }
        );
      }
      else {
        this.newBlog.imageId = undefined;
        this.blogService.postBlog(this.newBlog).subscribe((res) => {
          console.log('Post blog successful', res);
        });
      }


    }
  }

}
