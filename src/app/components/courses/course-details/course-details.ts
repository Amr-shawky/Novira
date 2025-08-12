import { Component , Input} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-course-details',
  imports: [CommonModule],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css'
})
export class CourseDetails {
 @Input() course: any;
}
