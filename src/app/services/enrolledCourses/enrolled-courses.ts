import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../configuration/config';
import { GlobalInfo } from '../global/global-info';

@Injectable({
  providedIn: 'root'
})
export class EnrolledCourses {
  
  private apiUrl = `${Config.BaseUrl}/api/Course/user/enrolled`;

  constructor(private http: HttpClient, private globalInfo: GlobalInfo) {}

  private getAuthHeaders(): HttpHeaders {
    const user = this.globalInfo.getUserInfo();
    const token = user?.token || '';
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getAllenrolledCourses(): Observable<any> {
    return this.http.get<any>(this.apiUrl, { headers: this.getAuthHeaders() });
  }

  // getCourseById(id: number): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  // }
}
