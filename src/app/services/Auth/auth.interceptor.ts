// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { GlobalInfo } from '../global/global-info';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(private globalInfo: GlobalInfo) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const user = this.globalInfo.getUserInfo();
//     const token = user?.token;

//     if (token) {
//       const cloned = req.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       return next.handle(cloned);
//     }

//     return next.handle(req);
//   }
// }
