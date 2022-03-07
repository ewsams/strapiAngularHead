import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User, UserLogin } from '../models/user.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private currentUser: BehaviorSubject<User> | undefined;
  public readonly currentUser$: Observable<User> | undefined;

  constructor(private http: HttpClient) {}

  async login(userLogin: UserLogin | undefined): Promise<User> {
    return await this.http
      .post<User>(
        'http://localhost:1337/api/auth/local',
        userLogin,
        httpOptions
      )
      .pipe(
        tap((user) => {
          if (user) {
            this.currentUser?.next(user);
          }
        })
      )
      .toPromise();
  }
}
