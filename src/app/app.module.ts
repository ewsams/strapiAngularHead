import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostService } from './services/post.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from './components/navigation/navigation.module';
import { HomeModule } from './components/home/home.module';
import { PostBlogModule } from './components/post-blog/post-blog.module';
import { BlogService } from './services/blog.service';
import { LoginModule } from './components/login/login.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HomeModule,
    NavigationModule,
    PostBlogModule,
    LoginModule
  ],
  providers: [PostService, BlogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
