import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-course-progress',
  imports: [],
  templateUrl: './course-progress.html',
  styleUrl: './course-progress.css'
})
export class CourseProgress {
  @Input() progress: number = 0;

}
