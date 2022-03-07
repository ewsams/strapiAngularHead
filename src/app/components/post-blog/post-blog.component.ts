import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { BlogPost } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-post-blog',
  template: `
    <div class="container">
      <mat-form-field appearance="fill">
        <mat-label>Write your Blog Title</mat-label>
        <input matInput [(ngModel)]="post.data.title" />
      </mat-form-field>
      <mat-form-field appearance="fill">
        <mat-label>Write your blog message...</mat-label>
        <textarea matInput [(ngModel)]="post.data.content"></textarea>
      </mat-form-field>
      <button
        mat-button
        [disabled]="post.data.title !== '' && post.data.content !== ''"
        color="primary"
        class="btn"
        (click)="submitBlogPost()"
      >
        Submit Blog Post
      </button>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
      }
      textarea {
        margin-top: 10px;
        height: 200px;
        border-radius: 6px;
        font-size: 1em;
        padding: 10px;
        transition: background-color 0.2s ease 0s;
        color: white;
      }

      input {
        color: white;
      }

      .btn {
        margin: 20px;
        padding: 6px;
        color: white;
        border: solid 3px white;
      }
    `,
  ],
})
export class PostBlogComponent implements OnInit {
  post: BlogPost = {
    data: {
      title: undefined,
      content: undefined,
      media: undefined,
    },
  };

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {}

  submitBlogPost() {
    this.blogService.createBlogPost(this.post);
  }
}
