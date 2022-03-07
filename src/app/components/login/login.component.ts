import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="container">
      <input
        placeholder="email"
        type="email"
        [(ngModel)]="loginCredentials.identifier"
      />
      <input
        placeholder="password"
        type="password"
        [(ngModel)]="loginCredentials.password"
      />
      <button type="submit" (click)="onSubmit(loginCredentials)">Login</button>
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
        input {
          width: 12em;
          height: 3em;
          margin: 0.5em;
        }
        input:focus {
          outline: none;
        }
        button {
          width: 5em;
          height: 3em;
          background-color: white;
          color: #2476ac;
        }
      }
    `,
  ],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  loginCredentials: UserLogin = {
    identifier: undefined,
    password: undefined,
  };

  ngOnInit(): void {}

  onSubmit(credentials: UserLogin): void {
    this.loginService.login(credentials);
  }
}
