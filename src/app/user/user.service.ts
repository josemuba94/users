import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable()
export class UserService {

  _loggedUser: User;

  constructor(private http: HttpClient) {
    this._loggedUser = new User();
  }

  get loggedUser(): User {
    return this._loggedUser;
  }

  set loggedUser(user: User) {
    this._loggedUser = user;
  }

  getAdminUser(): Observable<User> {
    return this.http.get<User>(environment.url_admin);
  }

  updateAdminUser(user: User): Observable<User> {
    return this.http.put<User>(environment.url_admin, user);
  }

}
