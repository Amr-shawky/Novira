import { Component , Input } from '@angular/core';
import { CourseCard } from '../course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {
  @Input() courses: any[] = [];
}
