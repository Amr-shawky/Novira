import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalInfo {
  private userInfoSubject = new BehaviorSubject<any>(this.getInitialUser());
  userInfo$ = this.userInfoSubject.asObservable();

  private getInitialUser() {
    const data = localStorage.getItem('userInfo');
    return data ? JSON.parse(data) : {id: '', userName: '', name: '', email: '', token:''};
  }

  setUserInfo(user: any) {
    localStorage.setItem('userInfo', JSON.stringify(user));
    this.userInfoSubject.next(user);
  }

  getUserInfo() {
    return this.userInfoSubject.value;
  }

  clearUserInfo() {
    localStorage.removeItem('userInfo');
    this.userInfoSubject.next({ userName: '', name: '', email: '' });
  }
}
