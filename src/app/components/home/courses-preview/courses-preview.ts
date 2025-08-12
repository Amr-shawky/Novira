import { Component } from '@angular/core';
import { CourseList } from '../../courses/course-list/course-list';

@Component({
  selector: 'app-courses-preview',
  imports: [CourseList],
  templateUrl: './courses-preview.html',
  styleUrl: './courses-preview.css'
})
export class CoursesPreview {
  courses = [
    {
      id: 1,
      title: 'Mastering Angular for Beginners',
      instructor: 'John Doe',
      image: 'https://source.unsplash.com/random/800x600?code',
      rating: 5,
      reviews: 120,
      price: 49.99,
      description: 'Learn Angular step-by-step from the basics to advanced concepts.'
    },
    {
      id: 2,
      title: 'React Fundamentals',
      instructor: 'Jane Smith',
      image: 'https://source.unsplash.com/random/800x600?react',
      rating: 4,
      reviews: 85,
      price: 39.99,
      description: 'Build modern web apps with React and master component-based architecture.'
    },
    {
      id: 3,
      title: 'Node.js API Development',
      instructor: 'Mike Johnson',
      image: 'https://source.unsplash.com/random/800x600?node',
      rating: 5,
      reviews: 200,
      price: 59.99,
      description: 'Create robust backends using Node.js, Express, and MongoDB.'
    }
  ];
}
