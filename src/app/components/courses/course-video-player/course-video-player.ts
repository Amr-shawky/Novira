import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CourseService } from './../../../services/course/course-service';

type Lesson = { title: string; time: string; preview?: boolean };
type Section = { section: string; duration: string; lessons: Lesson[] };

@Component({
  selector: 'app-course-video-player',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './course-video-player.html',
  styleUrl: './course-video-player.css',
})
export class CourseVideoPlayer implements OnInit {
  constructor(private courseService: CourseService, private route: ActivatedRoute) {}

  course: any;               // الكورس النهائي اللي بيتعرض في الـ HTML
  expanded = new Set<number>();

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.courseService.getCourseById(id).subscribe({
      next: (res) => {
        console.log('API course:', res);

        // ✅ تحويل شكل الداتا الراجعة من الـ API للشكل اللي الـ HTML محتاجه
        this.course = {
          id: res.id,
          title: res.title,
          category: res.category ?? 'Web Development',
          breadcrumb: ['Courses', res.category ?? 'General', res.title],
          lessons: res.subLessons?.reduce((acc: number, s: any) => acc + (s.lessons?.length ?? 0), 0) ?? 0,
          duration: 'N/A', // لو عندك duration في الـ API تقدر تحطه هنا
          rating: res.rating ?? 5,
          reviews: res.reviews ?? 0,
          videoUrl: res.videoUrl ?? 'https://www.w3schools.com/html/mov_bbb.mp4',
          description: res.description,
          whatYouLearn: res.whatYouLearn ?? [],
          content: res.subLessons?.map((s: any) => ({
            section: s.title,
            duration: s.duration ?? '—',
            lessons: s.lessons?.map((l: any) => ({
              title: l.lessonTitle,
              time: l.duration ?? '—',
              preview: l.preview ?? false,
            })) ?? [],
          })) ?? [],
          author: res.author ?? {
            name: 'Unknown',
            role: 'Instructor',
            image: 'assets/person2.jpeg',
          },
        };
      },
      error: (err) => {
        console.error('Error fetching course', err);
      },
    });
  }

  toggleSection(i: number) {
    this.expanded.has(i) ? this.expanded.delete(i) : this.expanded.add(i);
  }

  isOpen(i: number) {
    return this.expanded.has(i);
  }
}
