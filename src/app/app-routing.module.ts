import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './features/create-blog/pages/blog-home-page/blog-page.component';
import { CreateBlogPageComponent } from './features/create-blog/pages/create-blog-page/create-blog-page.component';



const routes: Routes = [
  {
    path:'',
    component: BlogPageComponent
  },
  {
    path:'create-blog',
    component: CreateBlogPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
