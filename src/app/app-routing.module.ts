import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PostBlogComponent } from './components/post-blog/post-blog.component';

const routes: Routes = [
  { component: HomeComponent, path: 'home' },
  { component: PostBlogComponent, path: 'blog' },
  { component: LoginComponent, path: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
