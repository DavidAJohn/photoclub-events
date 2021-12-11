import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SigninCredentials } from './models/SigninCredentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUri;
  
  constructor(private http: HttpClient) { }

  signIn(credentials: SigninCredentials): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/auth/local', credentials)
      .pipe((response) => {
        return response;
      },
    );
  }

}
