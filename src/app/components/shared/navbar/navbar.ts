import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { GlobalInfo } from '../../../services/global/global-info';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, RouterLink, CommonModule, FormsModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar implements OnInit {
  isLoggedIn = false;
  notificationsOpen = false;
  profileMenuOpen = false;
  mobileMenuOpen = false;
  searchTerm = '';
  user: any = null;

  courses = [
    { id: 1, title: 'Vue.js from Scratch', instructor: 'Sophia Wilson' },
    { id: 2, title: 'Django Web Development', instructor: 'Daniel Martinez' },
    { id: 3, title: 'Flutter Mobile Apps', instructor: 'Isabella Clark' },
    { id: 4, title: 'Java Programming Essentials', instructor: 'Matthew Harris' },
    { id: 5, title: 'Cybersecurity for Beginners', instructor: 'Olivia Walker' },
    { id: 6, title: 'SQL & Database Design', instructor: 'Ethan Lewis' },
    { id: 7, title: 'UI/UX Design Principles', instructor: 'Amelia Young' },
    { id: 8, title: 'Kotlin for Android Development', instructor: 'James Hall' },
    { id: 9, title: 'AWS Cloud Practitioner', instructor: 'Charlotte King' },
    { id: 10, title: 'C# and .NET Development', instructor: 'Benjamin Scott' },
    { id: 11, title: 'Mastering Angular for Beginners', instructor: 'John Doe' },
    { id: 12, title: 'React Fundamentals', instructor: 'Jane Smith' },
    { id: 13, title: 'Node.js API Development', instructor: 'Mike Johnson' },
    { id: 14, title: 'Python for Data Science', instructor: 'Emily Davis' },
    { id: 15, title: 'Web Development Bootcamp', instructor: 'David Brown' },
    { id: 16, title: 'Introduction to Machine Learning', instructor: 'David Brown' },
  ];

  filteredCourses: any[] = [];

  constructor(private router: Router, private globalInfo: GlobalInfo) {}

  ngOnInit() {
    this.globalInfo.userInfo$.subscribe((userInfo) => {
      if (userInfo && userInfo.userName) {
        this.isLoggedIn = true;
        this.user = userInfo;
        console.log('✅ Navbar updated, user:', this.user);
      } else {
        this.isLoggedIn = false;
        this.user = null;
      }
    });
  }

  onSearchChange() {
    const term = this.searchTerm.toLowerCase();
    this.filteredCourses = term
      ? this.courses.filter((c) => c.title.toLowerCase().includes(term))
      : [];
  }

  goToCourse(id: number) {
    this.filteredCourses = [];
    this.searchTerm = '';
    this.router.navigate(['/coursevideo', id]);
  }

  goToSearchPage() {
    this.filteredCourses = [];
    this.router.navigate(['/courses'], {
      queryParams: { search: this.searchTerm },
    });
    this.searchTerm = '';
  }

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
    this.globalInfo.setUserInfo(null);
    localStorage.removeItem('auth_token');
    this.router.navigate(['/login']);
    console.log('User logged out');
  }
}
