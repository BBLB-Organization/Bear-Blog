import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './features/create-blog/pages/blog-home-page/blog-page.component';
import { CreateBlogPageComponent } from './features/create-blog/pages/create-blog-page/create-blog-page.component';
import { CreateCommentsComponent } from './features/create-comments/pages/view-comments-page/create-comments.component';
import { CreateLoginPageComponent } from './features/create-login/pages/create-login-page/create-login-page.component';
import { CreateUserRegistrationPageComponent } from './features/create-login/pages/create-user-registration-page/create-user-registration-page.component';
import { AuthService } from './core/services/auth-service/auth.service';
import { ForgotPasswordPageComponent } from './features/create-login/pages/forgot-password-page/forgot-password-page.component';
import { VerificationUserPageComponent } from './features/create-login/pages/verification-user-page/verification-user-page.component';
import { ChangePasswordPageComponent } from './features/create-login/pages/change-password-page/change-password-page.component';



const routes: Routes = [
  {
    path: '',
    component: BlogPageComponent
  },
  {
    path: 'create-blog',
    component: CreateBlogPageComponent,
    canActivate: [AuthService]
  },
  {
    path: ':blogId/comments',
    component: CreateCommentsComponent
  },
  {
    path: 'login',
    component: CreateLoginPageComponent
  },
  {
    path: 'register',
    component: CreateUserRegistrationPageComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordPageComponent
  },
  {
    path: ':userId/user-verification',
    component: VerificationUserPageComponent
  },
  {
    path: ':userId/change-password',
    component: ChangePasswordPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
