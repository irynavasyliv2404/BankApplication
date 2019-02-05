import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import User from '../models/user.model';
import Response from '../models/response.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { }

  login(userName: string, password: string): Observable<Response> {
    return this.http.post<any>('/api/user/login', {
      userName,
      password
    });
  }

  register(userName: string, password: string): Observable<Response> {
    return this.http.post<any>('/api/user/register', {
      userName,
      password
    });
  }

  getUserInfo(): Observable<User> {
    return this.http.get<User>('/api/user/userInfo');
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/user/getAll');
  }
}

