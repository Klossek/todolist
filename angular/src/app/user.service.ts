import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './model/User';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { Task } from './model/Task';
import { AppConfig } from './config/constants';

@Injectable({ providedIn: 'root' })
export class UserService {
  private authUrl = AppConfig.apiEndpoint;

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  private getCookie(cname: string) {
    let name = cname + '=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  httpOptions = {
    headers: this.headers,
    withCredentials: true,
  };

  constructor(private http: HttpClient) {}

  hello(): Observable<User> {
    return this.http
      .get<User>(this.authUrl + '/api/greeting', this.httpOptions)
      .pipe(catchError(this.handleError<User>('get')));
  }

  postHello(): Observable<User> {
    return this.http
      .post<User>(this.authUrl + '/api/greeting', {}, this.httpOptions)
      .pipe(catchError(this.handleError<User>('get')));
  }

  logout(): Observable<User> {
    return this.http
      .post<User>(this.authUrl + '/api/logout', this.httpOptions)
      .pipe(catchError(this.handleError<User>('get')));
  }

  createToken(): Observable<any> {
    return this.http
      .get<any>(this.authUrl + '/sanctum/csrf-cookie', this.httpOptions)
      .pipe(catchError(this.handleError<any>('get')));
  }

  getUser(): Observable<User> {
    return this.http
      .post<User>(this.authUrl + '/api/user', this.httpOptions)
      .pipe(catchError(this.handleError<User>('get')));
  }

  get(): Observable<User> {
    return this.http
      .post<User>(this.authUrl + '/api/tokens/create', this.httpOptions)
      .pipe(catchError(this.handleError<User>('get')));
  }

  login(email: String, password: String): Observable<User> {
    return this.http
      .post<User>(
        this.authUrl + '/login',
        { email, password },
        this.httpOptions
      )
      .pipe(catchError(this.handleError<User>('login')));
  }

  register(name: String, email: String, password: String): Observable<User> {
    return this.http
      .post<User>(
        this.authUrl + '/register',
        { name, email, password, password_confirmation: password },
        this.httpOptions
      )
      .pipe(catchError(this.handleError<User>('register')));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
