import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Testimonials } from './testimonials/testimonials';
import { Statistics } from './statistics/statistics';
import { Feedback } from './feedback/feedback';
import { CoursesPreview } from './courses-preview/courses-preview';

@Component({
  selector: 'app-home',
  imports: [Hero , Testimonials,Statistics,Feedback,CoursesPreview],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

