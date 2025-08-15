import { Component , Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ICourseDto } from '../../../interfaces/icourse-dto';
import { CourseService } from '../../../services/course-service';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule , RouterModule],
  templateUrl: './course-card.html',
  styleUrls: ['./course-card.css']
})
export class CourseCard {
  base: string;
  @Input() course!: ICourseDto;

  constructor(private courseService: CourseService) {
    this.base = this.courseService.BaseUrl;
  }
}
