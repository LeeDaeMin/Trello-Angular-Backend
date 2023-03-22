import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string) {
    return this.http.post(`${this.apiURL}/api/v1/auth/login`, {
      email,
      password
    });
  }

  register(name: string, password: string, email: string) {
    return this.http.post(`${this.apiURL}/api/v1/auth/is-available`, {email});
  }


  isAvailable(email: string){
    return this.http.post<{isAvailable: boolean}>(`${this.apiURL}/api/v1/auth/is-available`, {email});
  }
}
