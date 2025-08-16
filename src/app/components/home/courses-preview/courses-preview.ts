import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../courses/course-card/course-card';
import { ICourseDto } from '../../../interfaces/icourse-dto';
import { CourseService } from '../../../services/course/course-service';
import { Spinner } from '../../shared/spinner/spinner';

@Component({
  selector: 'app-courses-preview',
  standalone: true,
  imports: [CommonModule, CourseCard, Spinner],
  templateUrl: './courses-preview.html',
  styleUrls: ['./courses-preview.css']
})
export class CoursesPreview implements OnInit {
  courses: ICourseDto[] = [];
  loading: boolean = true; // added loading state

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loading = true;
    this.courseService.getAllCourses().subscribe({
      next: courses => {
        this.courses = courses.slice(0, 6);
        console.log('Courses Preview loaded:', this.courses);
      },
      error: () => this.loading = false,
      complete: () => this.loading = false
    });
  }
}
