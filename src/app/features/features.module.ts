import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPageComponent } from './create-blog/pages/blog-home-page/blog-page.component';
import { ByPassSecurityPipe } from '../shared/pipes/sanitize.pipe';
import { ViewImagesComponent } from './create-blog/view-images/view-images.component';
import { UploadImagesComponent } from './create-blog/upload-images/upload-images.component';
import { SharedModule } from '../shared/shared.module';
import { CreateBlogPageComponent } from './create-blog/pages/create-blog-page/create-blog-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewTagsComponent } from './create-blog/view-tags/view-tags.component';
import { CreateCommentsComponent } from './create-comments/pages/view-comments-page/create-comments.component';




@NgModule({
  declarations: [BlogPageComponent, ViewImagesComponent, UploadImagesComponent, CreateBlogPageComponent, ViewTagsComponent, CreateCommentsComponent],
  imports: [
    CommonModule,
    ByPassSecurityPipe,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [BlogPageComponent]
})
export class FeaturesModule { }
