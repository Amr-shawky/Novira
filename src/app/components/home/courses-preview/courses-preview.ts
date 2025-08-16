import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../courses/course-card/course-card';
import { ICourseDto } from '../../../interfaces/icourse-dto';
import { CourseService } from '../../../services/course/course-service';

@Component({
  selector: 'app-courses-preview',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './courses-preview.html',
  styleUrls: ['./courses-preview.css']
})
export class CoursesPreview implements OnInit {
  courses: ICourseDto[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(courses => {
      // ناخد أول 6 بس
      this.courses = courses.slice(0, 6);
      console.log('Courses Preview loaded:', this.courses);
    });
  }
}
