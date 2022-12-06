import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAuthentication } from './interfaces/user-authentication';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private api = 'http://localhost:3000/user/login';

  constructor(private httpClient: HttpClient) {}

  userAuthentication(
    object: UserAuthentication
  ): Observable<UserAuthentication | any> {
    return this.httpClient.post(this.api, object);
  }
}
