import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { CourseDetails } from './course-details/course-details';
import { CourseVideoPlayer } from './course-video-player/course-video-player';
import { CourseProgress } from './course-progress/course-progress';
import { FilterSidebar } from '../shared/filter-sidebar/filter-sidebar';
import { ActivatedRoute } from '@angular/router';
import { CourseCard } from './course-card/course-card';
import { ICourseDto } from '../../interfaces/icourse-dto';
import { CourseService } from '../../services/course/course-service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CommonModule,
    CourseDetails,
    CourseVideoPlayer,
    CourseProgress,
    FilterSidebar,
    CourseCard
  ],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css'],
})
export class Courses {
  courses: ICourseDto[] = [];
  filteredCourses: ICourseDto[] = [];

  filters = {
    search: '',
    category: ''
  };

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.courseService.getAllCourses().subscribe(courses => {
      this.courses = courses;
      console.log('Courses loaded:', this.courses);
      this.filteredCourses = courses; // في البداية نعرض الكل
    });
  }

  applyFilters(newFilters: any) {
  this.filters = newFilters;
  this.filteredCourses = this.courses.filter(course => {
    return (
      course.courseTitle.toLowerCase().includes(this.filters.search.toLowerCase()) &&
      (this.filters.category ? course.categoryName === this.filters.category : true)
    );
  });
}

  resetFilters() {
    this.filters = { search: '', category: '' };
    this.filteredCourses = [...this.courses];
  }
}
