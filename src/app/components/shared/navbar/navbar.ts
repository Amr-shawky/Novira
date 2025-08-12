import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  imports: [MatIconModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  isLoggedIn = true; // أو false للتجربة
  notificationsOpen = false;
  profileMenuOpen = false;
  mobileMenuOpen = false;

  user = {
    name: 'Amr Mohamed',
    avatarUrl: 'imgs/gojosatoro.jpeg' // سيبها فاضية عشان يجرب الـ initials
  };

  toggleNotifications() {
    this.notificationsOpen = !this.notificationsOpen;
  }

  toggleProfileMenu() {
    this.profileMenuOpen = !this.profileMenuOpen;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  logout() {
    console.log('User logged out');
  }
}