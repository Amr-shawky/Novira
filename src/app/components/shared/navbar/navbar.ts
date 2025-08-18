import { CourseService } from './../../../services/course/course-service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { GlobalInfo } from '../../../services/global/global-info';
import { ICourseDto } from '../../../interfaces/icourse-dto';
import { Search } from '../../../services/search/search';

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
  constructor(private courseService: CourseService,private router: Router, 
    private globalInfo: GlobalInfo,
    private searchService: Search
  ) {}

  courses:ICourseDto[] = [];
  filteredCourses: ICourseDto[] = [];


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
    this.courseService.getAllCourses().subscribe((courses) => {
      this.courses = courses;
      console.log('Courses loaded:', this.courses);
    });
  }

  onSearchChange() {
      this.searchService.setSearch(this.searchTerm); // ✅ send value to service
    const term = this.searchTerm.toLowerCase();
    this.filteredCourses = term
      ? this.courses.filter((c) => c.courseTitle.toLowerCase().includes(term))
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
