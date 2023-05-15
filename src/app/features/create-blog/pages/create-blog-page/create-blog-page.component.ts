import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Blog } from 'src/app/core/models/blog';
import { Image } from 'src/app/core/models/image';
import { Tag } from 'src/app/core/models/tag';
import { BlogService } from 'src/app/core/services/blog-service/blog.service';
import { ImageService } from 'src/app/core/services/image-service/image.service';
import { TagService } from 'src/app/core/services/tag-service/tag.service';
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
    imageId: undefined,
    tagListId: undefined
  };
  newTagList: Tag = {
    id: undefined,
    tagNames: ""
  }
  displayTagList: string[] = ['Nature', 'Parks', 'Forests'];
  userTagList: string[] = [];

  message = "Test error";
  @ViewChild(ToasterComponent) toasterComponent: ToasterComponent = new ToasterComponent;

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
    private blogService: BlogService,
    private tagService: TagService
  ) { }

  ngOnInit(): void {
  }

  setSelectedFile(file: File) {
    this.selectedFile = file;
  }

  updateTagList(value: string) {
    if (this.userTagList.includes(value)) {
      let indexOfValue = this.userTagList.indexOf(value);
      this.userTagList.splice(indexOfValue, 1);
    }
    else {
      this.userTagList.push(value);
    }
  }

  saveAndGetTagList() {
    this.newTagList.tagNames = this.userTagList.join(',');
    this.tagService.saveTagList(this.newTagList).subscribe((tagResponse: Tag) => {
      this.newBlog.tagListId = tagResponse.id;
      this.blogService.postBlog(this.newBlog).subscribe((res) => {
        this.message = this.blogTitle + "was submitted successfully!";
        this.toasterComponent.openToaster();
      });
    })
  }


  submitBlog() {
    if (this.blogForm.valid) {
      this.newBlog.blogTitle = this.blogTitle;
      this.newBlog.blogText = this.blogText;
      if (this.selectedFile != null) {
        this.imageService.uploadImage(this.selectedFile).subscribe(
          (response: Image) => {
            this.newBlog.imageId = response.id;

            if (this.userTagList.length > 0) {
              this.saveAndGetTagList();
            }

            else {
              this.newBlog.tagListId = undefined;
              this.blogService.postBlog(this.newBlog).subscribe((res) => {
                this.message = this.blogTitle + "was submitted successfully!";
                this.toasterComponent.openToaster();
              });
            }

          }
        );

      }
      else {
        this.newBlog.imageId = undefined;

        if (this.userTagList.length > 0) {
          this.saveAndGetTagList();
        }
        else {
          this.newBlog.tagListId = undefined;
          this.blogService.postBlog(this.newBlog).subscribe((res) => {
            this.message = this.blogTitle + "was submitted successfully!";
            this.toasterComponent.openToaster();
          });
        }

      }


    }
  }

}
