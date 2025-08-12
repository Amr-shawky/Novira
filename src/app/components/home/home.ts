import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Statistics } from './statistics/statistics';
import { Feedback } from './feedback/feedback';
import { CoursesPreview } from './courses-preview/courses-preview';
import { Features } from './features/features';
import { Partners } from './partners/partners';
import { Journey } from './journey/journey';
import { Mentors } from './mentors/mentors';
import { FAQ } from './faq/faq';

@Component({
  selector: 'app-home',
  imports: [Hero ,Statistics,Feedback,CoursesPreview,Features,Partners,Journey,Mentors,FAQ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

