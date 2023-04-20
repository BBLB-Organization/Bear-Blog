import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPageComponent } from './create-blog/pages/blog-page.component';
import { ByPassSecurityPipe } from '../shared/pipes/sanitize.pipe';
import { ViewImagesComponent } from './create-blog/view-images/view-images.component';
import { UploadImagesComponent } from './create-blog/upload-images/upload-images.component';



@NgModule({
  declarations: [BlogPageComponent, ViewImagesComponent, UploadImagesComponent],
  imports: [
    CommonModule,
    ByPassSecurityPipe
  ],
  exports: [BlogPageComponent]
})
export class FeaturesModule { }
