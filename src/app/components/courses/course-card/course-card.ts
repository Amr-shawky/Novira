import { Component , Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ICourseDto } from '../../../interfaces/icourse-dto';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule , RouterModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {
@Input() course!: ICourseDto;
}
