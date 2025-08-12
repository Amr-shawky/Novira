import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  isLoggedIn = true; // أو false للتجربة
  notificationsOpen = false;
  profileMenuOpen = false;
  mobileMenuOpen = false;

  user = {
    name: 'Test User',
    avatarUrl: '' // سيبها فاضية عشان يجرب الـ initials
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