import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPageComponent } from './create-blog/pages/blog-page.component';



@NgModule({
  declarations: [BlogPageComponent],
  imports: [
    CommonModule
  ],
  exports: [BlogPageComponent]
})
export class FeaturesModule { }
