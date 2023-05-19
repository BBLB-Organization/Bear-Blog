import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './features/create-blog/pages/blog-home-page/blog-page.component';
import { CreateBlogPageComponent } from './features/create-blog/pages/create-blog-page/create-blog-page.component';
import { CreateCommentsComponent } from './features/create-comments/pages/view-comments-page/create-comments.component';
import { CreateLoginPageComponent } from './features/create-login/pages/create-login-page/create-login-page.component';



const routes: Routes = [
  {
    path:'',
    component: BlogPageComponent
  },
  {
    path:'create-blog',
    component: CreateBlogPageComponent
  },
  {
    path:':blogId/comments',
    component: CreateCommentsComponent
  },
  {
    path:'login',
    component: CreateLoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
