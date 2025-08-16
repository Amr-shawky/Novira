import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators , FormGroup } from '@angular/forms';
import { RegisterServices } from './../../../services/register/register-services';
import { RouterLink } from '@angular/router';
import { GlobalInfo } from '../../../services/global/global-info';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule , RouterLink],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class Signup {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterServices,
    private globalInfo: GlobalInfo // 👈 inject السيرفس الشيرد
  ) {
    this.signupForm = this.fb.group({
      userName: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const { userName, name, email, password } = this.signupForm.value;

      this.registerService.register(userName, name, password, email).subscribe({
        next: (res: any) => {
          console.log('✅ SignUp Success:', res);

          // 👇 هنا بنخزن بيانات اليوزر في GlobalInfo
          this.globalInfo.setUserInfo({
            userName,
            name,
            email
          });
          console.log('🌍 Global User Info:', this.globalInfo.getUserInfo());
          alert('SignUp Success!');
        },
        error: (err) => {
          console.error('❌ SignUp Failed:', err);
          alert('SignUp Failed!');
        }
      });
    } else {
      alert('❌ Please fill in all required fields correctly.');
    }
  }
}
