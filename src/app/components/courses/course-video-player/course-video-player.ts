import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-course-video-player',
  imports: [],
  templateUrl: './course-video-player.html',
  styleUrl: './course-video-player.css'
})
export class CourseVideoPlayer {
  @Input() videoUrl: string = '';
}
