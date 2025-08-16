import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../configuration/config';


@Injectable({
  providedIn: 'root'
})
//http://localhost:27674/api/Course
export class CourseService {
  
  private apiUrl = `${Config.BaseUrl}/api/Course`;

  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getCourseById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
