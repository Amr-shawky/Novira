import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class Search {
  
 private searchSubject = new BehaviorSubject<string>(''); 
  search$ = this.searchSubject.asObservable();

  setSearch(term: string) {
    this.searchSubject.next(term);
  }
}