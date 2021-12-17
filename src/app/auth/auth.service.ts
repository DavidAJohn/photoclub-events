import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegCredentials } from './models/regCredentials';
import { RegResponse } from './models/regResponse';
import { SigninCredentials } from './models/signinCredentials';
import { SigninResponse } from './models/signinResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUri;
  signedIn$ = new BehaviorSubject(false);
  
  constructor(private http: HttpClient) { }

  signIn(credentials: SigninCredentials): Observable<any> {
    return this.http.post<SigninResponse>(this.apiUrl + '/auth/local', credentials)
      .pipe((response) => {
        return response;
      },
    );
  }

  register(credentials: RegCredentials): Observable<any> {
    return this.http.post<RegResponse>(this.apiUrl + '/auth/local/register', credentials)
      .pipe((response) => {
        return response;
      },
    );
  }

}
