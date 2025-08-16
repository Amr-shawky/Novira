import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginServices } from '../../../services/login/login-services';
import { GlobalInfo } from '../../../services/global/global-info';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  form: any;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginServices,
    private globalInfo: GlobalInfo,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const { username, password } = this.form.value;

      this.loginService.login(username, password).subscribe({
        next: (response: any) => {
          console.log('✅ Login successful:', response);

          // 👇 نخزن بيانات اليوزر في GlobalInfo
          if (response.userinfo) {
            this.globalInfo.setUserInfo({
              userName: response.userinfo.username, // تأكد من اسم الفيلد من الـ API
              name: response.userinfo.name,
              email: response.userinfo.email,
              avatarUrl: response.userinfo.avatarUrl || null
            });
          }

          // 👇 نخزن الـ token (لو الـ API بيرجعه)
          if (response.token) {
            localStorage.setItem('auth_token', response.token);
          }

          alert('Login Success!');
          console.log('🌍 Global User Info:', this.globalInfo.getUserInfo());

          // 👇 بعد اللوجين رجعه للهوم أو الداشبورد
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('❌ Login failed:', error);
          alert('Login Failed!');
        }
      });
    } else {
      alert('❌ Please enter username and password.');
    }
  }
}
