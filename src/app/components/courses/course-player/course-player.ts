import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
type Lesson = { title: string; time: string; url: string; preview?: boolean };
type Section = { section: string; duration: string; lessons: Lesson[] };

@Component({
  selector: 'app-course-player',
  imports: [CommonModule, MatIconModule],
  templateUrl: './course-player.html',
  styleUrls: ['./course-player.css']
})
export class CoursePlayer{
  course: any;
  expanded = new Set<number>();
  currentLesson?: Lesson;
  progress = 0;

  private courses = [
    {
      id: 1,
      title: 'Mastering Angular for Beginners',
      breadcrumb: ['My Courses', 'Angular'],
      lessons: 38,
      duration: '4h 30m',
      rating: 5,
      reviews: 126,
      description:
        'This is your enrolled course. Continue watching from where you left off.',
      content: <Section[]>[
        {
          section: '01: Intro',
          duration: '25min',
          lessons: [
            {
              title: 'Introduction',
              time: '14 min',
              url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
            },
            {
              title: 'What is Angular?',
              time: '10 min',
              url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            },
          ],
        },
        {
          section: '02: Intermediate',
          duration: '1h 20m',
          lessons: [
            {
              title: 'Signals vs RxJS',
              time: '15 min',
              url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
            },
          ],
        },
      ],
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.course = this.courses.find((c) => c.id === id) ?? this.courses[0];
    this.expanded.add(0);
    this.currentLesson = this.course.content[0].lessons[0];
    this.updateProgress();
  }

  toggleSection(i: number) {
    this.expanded.has(i) ? this.expanded.delete(i) : this.expanded.add(i);
  }

  isOpen(i: number) {
    return this.expanded.has(i);
  }

  playLesson(lesson: Lesson) {
    this.currentLesson = lesson;
    this.updateProgress();
  }

  updateProgress() {
    const allLessons = this.course.content.flatMap((s: { lessons: any; }) => s.lessons);
    const index = allLessons.findIndex((l: any) => l === this.currentLesson);
    this.progress = ((index + 1) / allLessons.length) * 100;
  }
}
