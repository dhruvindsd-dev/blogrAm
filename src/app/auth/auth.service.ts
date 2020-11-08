import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../modals/user.modal';

export interface AuthResponseData {
  username: string;
  email: string;
  token: string;
}

@Injectable()
export class AuthService {
  serverUrl: string = 'http://127.0.0.1:8000';
  user = new BehaviorSubject<User>(null);
  // it store the previous value that means that you can always retreive the latest value.

  constructor(private http: HttpClient) {}

  signUp(username: string, email: string, password: string) {
    return this.http
      .post<AuthResponseData>(`${this.serverUrl}/sign-up`, {
        username: username,
        password: password,
        email: email,
      })
      .pipe(
        catchError(this.handleError),
        tap((responseData) => {
          // register the user
          this.user.next(
            new User(
              responseData.username,
              responseData.email,
              responseData.email
            )
          );
        })
      );
  }

  getToken(email: string, password: string) {
    // aka sign in
    return this.http
      .post<AuthResponseData>(`${this.serverUrl}/get-token`, {
        email: email,
        password: password,
      })
      .pipe(
        catchError(this.handleError),
        tap((responseData) => {
          // register the user
          this.user.next(
            new User(
              responseData.username,
              responseData.email,
              responseData.email
            )
          );
        })
      );
  }

  logOut() {}

  handleError(errorMsg: HttpErrorResponse) {
    // set some custom error message
    let msg = 'Some unknown error occured. Please try again later.';
    switch (errorMsg.error.error) {
      case 'invalid_credentials':
        msg = 'invalid email or password';
        break;
      case 'user_exists':
        msg = 'user aldready exists';
    }

    return throwError(msg);
  }
}