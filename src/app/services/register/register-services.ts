import { Injectable } from '@angular/core';
import { Config } from '../configuration/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterServices {
  private apiUrl = `${Config.BaseUrl}/api/Auth/Register`;

  constructor(private http: HttpClient) {}

  register(userName: string, name: string, password: string, email: string) {
    const body = { userName, name, password, email };
    return this.http.post(this.apiUrl, body);
  }
}
