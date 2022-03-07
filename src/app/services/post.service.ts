import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post['data']> {
    return this.http
      .get<Post>('http://localhost:1337/api/posts?populate=*')
      .pipe(map((res) => res?.data));
  }
}
