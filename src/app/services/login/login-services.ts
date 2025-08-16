import { Injectable } from '@angular/core';
import { Config } from '../configuration/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServices {
   private apiUrl = `${Config.BaseUrl}/api/Auth/Login`;
   constructor(private http: HttpClient){}
  login(username: string, password: string) {
    const body = { username, password };
    return this.http.post(this.apiUrl, body);
  }
}
