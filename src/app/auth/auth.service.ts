import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SigninCredentials } from './models/SigninCredentials';
import { SigninResponse } from './models/SigninResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUri;
  
  constructor(private http: HttpClient) { }

  signIn(credentials: SigninCredentials): Observable<any> {
    return this.http.post<SigninResponse>(this.apiUrl + '/auth/local', credentials)
      .pipe((response) => {
        return response;
      },
    );
  }

}
