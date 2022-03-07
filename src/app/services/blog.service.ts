import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogPost, BlogResponse } from '../models/blog.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ2MDk1MjgxLCJleHAiOjE2NDg2ODcyODF9.8ZbH-G0vH6Xe7QQ0Wss8dVyDqIE7lh5_NleVh874QCc',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  async createBlogPost(body: BlogPost): Promise<BlogResponse> {
    return await this.http
      .post<BlogResponse>(
        'http://localhost:1337/api/blog-posts',
        body,
        httpOptions
      )
      .toPromise();
  }
}
