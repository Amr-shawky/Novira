import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { CourseDetails } from './course-details/course-details';
import { CourseVideoPlayer } from './course-video-player/course-video-player';
import { CourseProgress } from './course-progress/course-progress';
import { FilterSidebar } from '../shared/filter-sidebar/filter-sidebar';
import { ActivatedRoute } from '@angular/router';
import { CourseCard } from './course-card/course-card';
import { ICourseDto } from '../../interfaces/icourse-dto';
import { CourseService } from '../../services/course-service';

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
  // filteredCourses = signal<ICourseDto[]>([]);
  // selectedCourseId = signal<number | null>(null);

  // filters = signal({
  //   search: '',
  //   category: '',
  //   level: '',
  //   duration: '',
  // });
  
  constructor(private route: ActivatedRoute, private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getAllCourses().subscribe(courses => {
      this.courses = courses;
      console.log('All courses:', courses);
      // this.filteredCourses.set(courses); // نعمل نسخة للفلاتر
    });
  }

  // selectCourse(id: number) {
  //   this.selectedCourseId.set(id);
  // }

  // clearSelection() {
  //   this.selectedCourseId.set(null);
  // }

  // applyFilters(filters: any) {
  //   this.filters.set(filters);
  //   console.log('Applied filters:', filters);

  //   // const search = filters.search?.toLowerCase() || '';
  //   // const category = filters.category || '';

  //   // const filtered = this.courses()
  //   //   .filter(c => 
  //   //     c.courseTitle.toLowerCase().includes(search) &&
  //   //     (category ? c.categoryName === category : true)
  //   //   );

  //   // this.filteredCourses.set(filtered);
  // }
}
