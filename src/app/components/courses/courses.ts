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
import { Spinner } from '../shared/spinner/spinner';
import { Search } from '../../services/search/search';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CommonModule,
    CourseDetails,
    CourseVideoPlayer,
    CourseProgress,
    FilterSidebar,
    CourseCard,
    Spinner
  ],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css'],
})
export class Courses {
  courses: ICourseDto[] = [];
  filteredCourses: ICourseDto[] = [];
  isLoading = signal(true); // ✅ add loading state

  filters = {
    search: '',
    category: '',
    level: 'all',
    duration: 0
  };

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private searchService: Search
  ) {}

  ngOnInit() {
    this.courseService.getAllCourses().subscribe(courses => {
      this.courses = courses;
      console.log('Courses loaded:', this.courses);
      this.filteredCourses = courses; // في البداية نعرض الكل
      this.isLoading.set(false); // ✅ stop loading
    });

      // ✅ listen to search changes from navbar
  this.searchService.search$.subscribe(term => {
    this.filters.search = term;
    this.applyFilters(this.filters);
  });
  }

  applyFilters(newFilters: any) {
  this.filters = newFilters;
  this.filteredCourses = this.courses.filter(course => {
    return (
      course.courseTitle.toLowerCase().includes(this.filters.search.toLowerCase()) &&
      (this.filters.category ? course.categoryName === this.filters.category : true) &&
      (this.filters.level !== 'all' ? course.level === this.filters.level : true) &&
      (this.filters.duration ? course.duration <= this.filters.duration : true)
    );
  });
}

  resetFilters() {
    this.filters = { search: '', category: '' , level: '', duration: 0 };
    this.filteredCourses = [...this.courses];
  }
}
