import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './model/User';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { Task } from './model/Task';
import { AppConfig } from './config/constants';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private taskUrl = AppConfig.apiEndpoint + '/api/tasks';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  });

  httpOptions = {
    headers: this.headers,
    withCredentials: true,
  };

  constructor(private http: HttpClient) {}

  toggleCompleted(task: Task) {
    return this.http.post<Task>(
      this.taskUrl + `/set-complete/${task.id}`,
      this.httpOptions,
    );
  }

  delete(task: Task): Observable<Task> {
    return this.http.delete<Task>(
      this.taskUrl + `/${task.id}`,
      this.httpOptions,
    );
  }

  create(name: String, description: String): Observable<Task> {
    return this.http
      .post<Task>(
        this.taskUrl + '/create',
        { name, description },
        this.httpOptions,
      )
      .pipe(catchError(this.handleError<Task>('getTaks')));
  }

  getTasks(): Observable<Task[]> {
    return this.http
      .get<Task[]>(this.taskUrl, this.httpOptions)
      .pipe(catchError(this.handleError<Task[]>('getTaks', [])));
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
      console.error(error); // log to console insteads
      return of(result as T);
    };
  }
}
