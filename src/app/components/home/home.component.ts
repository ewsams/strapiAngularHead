import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="card" *ngFor="let post of posts$ | async">
        <div *ngFor="let image of post.attributes.images.data">
          <img src="http://localhost:1337{{ image.attributes.url }}" />
        </div>
        <div class="card-title">{{ post.attributes.title }}</div>
        <div class="card-content">{{ post.attributes.content }}</div>
        <div class="card-content">{{ post.attributes.date }}</div>
        <div class="card-content">{{ post.attributes.tags }}</div>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }
      .card {
        padding: 50px;
        margin: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: fit-content;
        width: 300px;
        box-shadow: 0 2px 3px 0 white;
        transition: 0.3s;
        color: white;

        &:hover {
          box-shadow: 0 8px 16px 0 white;
        }
        .card-content {
          padding: 10px;
          flex-direction: column;
        }
        img {
          margin: 10px;
          height: 10em;
          width: 10em;
          object-fit: contain;
        }
        .card-title {
          font-size: 2em;
        }
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  posts$: Observable<Post['data']> | undefined;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }
}
