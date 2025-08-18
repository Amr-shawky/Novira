import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CourseCard } from "../../courses/course-card/course-card";
import { ICourseDto } from '../../../interfaces/icourse-dto';
import { CourseService } from '../../../services/course/course-service';
import { EnrolledCourses } from '../../../services/enrolledCourses/enrolled-courses';
import { count } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, CourseCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  user = {
    name: 'Amr Shawky',
    avatarUrl: '',
    role: 'student'
  };
  courses : ICourseDto[] = [];
  constructor(private enrolledCourses: EnrolledCourses) {}
  ngOnInit() {
    this.enrolledCourses.getAllenrolledCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
      },
      error: (err) => {
        console.error('Error fetching courses', err);
      }
    });
  }
  // إحصائيات مختصرة
  
  // كورسات تجريبية

  notifications = [
    { id: 1, text: 'New lesson released in Mastering Angular', time: '3h' },
    { id: 2, text: 'Certificate available for UI/UX Design', time: '2d' }
  ];
  stats = {
    courses: this.courses.length+1,
    completedPercent: 57,
    certificates: 1,
    hours: 56
  };
  
  // UI state
  showNotifications = false;
  showCourseDetailsId: number | null = null;

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }

  toggleCourseDetails(id: number) {
    this.showCourseDetailsId = this.showCourseDetailsId === id ? null : id;
  }

  markComplete(course: any) {
    course.progress = 100;
  }
}