import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPageComponent } from './create-blog/pages/blog-page.component';
import { ByPassSecurityPipe } from '../shared/pipes/sanitize.pipe';



@NgModule({
  declarations: [BlogPageComponent],
  imports: [
    CommonModule,
    ByPassSecurityPipe
  ],
  exports: [BlogPageComponent]
})
export class FeaturesModule { }
