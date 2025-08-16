import { Injectable } from '@angular/core';
import { Config } from '../configuration/config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IcategoryDTO } from '../../interfaces/icategory-dto';

@Injectable({
  providedIn: 'root'
})
export class CategoryServices {


  private apiUrl = `${Config.BaseUrl}/api/category`;

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<IcategoryDTO[]> {
    return this.http.get<IcategoryDTO[]>(this.apiUrl);
  }

}
