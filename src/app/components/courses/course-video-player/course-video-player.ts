import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

type Lesson = { title: string; time: string; preview?: boolean };
type Section = { section: string; duration: string; lessons: Lesson[] };

@Component({
  selector: 'app-course-video-player',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './course-video-player.html',
  styleUrl: './course-video-player.css',
})
export class CourseVideoPlayer {
  course: any;
  expanded = new Set<number>(); // sections opened

  // Demo data
  private courses = [
    {
      id: 1,
      title: 'Mastering Angular for Beginners',
      category: 'Web Development • UI / UX Design',
      breadcrumb: ['Courses', 'Web', 'Angular'],
      lessons: 38,
      duration: '4h 30m',
      rating: 5,
      reviews: 126,
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      description:
        'Unlock the power of Angular, the leading SPA framework. This course takes you from zero to productive with hands-on projects and best practices.',
      whatYouLearn: [
        'Project and environment setup',
        'Components, Signals & Control Flow',
        'Routing, Guards & Lazy Loading',
        'Reusable UI patterns with Tailwind',
        'HTTP, interceptors & state',
        'Deploying & optimizing builds',
      ],
      content: <Section[]>[
        {
          section: '01: Intro',
          duration: '22min',
          lessons: [
            { title: 'Introduction', time: '2 min', preview: true },
            { title: 'What is Angular?', time: '5 min' },
            { title: 'Understanding the Architecture', time: '12 min' },
            { title: 'UI tour', time: '3 min' },
          ],
        },
        {
          section: '02: Intermediate Level Stuff',
          duration: '1h 20m',
          lessons: [
            { title: 'Signals vs RxJS: when to use what', time: '14 min' },
            { title: 'Standalone Components deep dive', time: '28 min' },
            { title: 'Control Flow @if / @for', time: '18 min' },
            { title: 'Forms & Validation (Reactive)', time: '20 min' },
          ],
        },
        {
          section: '03: Advanced Stuff',
          duration: '36min',
          lessons: [
            { title: 'State & Data Caching', time: '12 min' },
            { title: 'Performance & CD Strategies', time: '11 min' },
            { title: 'Testing Components', time: '13 min' },
          ],
        },
      ],
      author: {
        name: 'John Doe',
        role: 'Senior Web Developer',
        image: 'assets/person2.jpeg',
      },
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.course = this.courses.find((c) => c.id === id) ?? this.courses[0];
    // افتح أول سكشن افتراضيًا
    this.expanded.add(0);
  }

  toggleSection(i: number) {
    this.expanded.has(i) ? this.expanded.delete(i) : this.expanded.add(i);
  }

  isOpen(i: number) {
    return this.expanded.has(i);
  }
}
