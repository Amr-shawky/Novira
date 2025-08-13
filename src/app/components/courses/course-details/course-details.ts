import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css'
})
export class CourseDetails {
  course: any;

  // بيانات تجريبية - ممكن لاحقًا تجيبها من service
courses = [
    {
      id: 1,
      title: 'Mastering Angular for Beginners',
      instructor: 'John Doe',
      image: 'assets/courseimg1.webp',
      rating: 5,
      reviews: 120,
      price: 49.99,
      description: 'Learn Angular step-by-step from the basics to advanced concepts.'
    },
    {
      id: 2,
      title: 'React Fundamentals',
      instructor: 'Jane Smith',
      image: 'assets/courseimg2.webp',
      rating: 4,
      reviews: 85,
      price: 39.99,
      description: 'Build modern web apps with React and master component-based architecture.'
    },
    {
      id: 3,
      title: 'Node.js API Development',
      instructor: 'Mike Johnson',
      image: 'assets/nodejs.png',
      rating: 5,
      reviews: 200,
      price: 59.99,
      description: 'Create robust backends using Node.js, Express, and MongoDB.'
    },
    {
      id: 4,
      title: 'Python for Data Science',
      instructor: 'Emily Davis',
      image: 'assets/courseimg4.jpeg',
      rating: 3,
      reviews: 150,
      price: 44.99,
      description: 'Analyze data and build machine learning models with Python.'
    },
    {
      id: 5,
      title: 'Web Development Bootcamp',
      instructor: 'Chris Lee',
      image: 'assets/courseimg5.jpeg',
      rating: 4,
      reviews: 300,
      price: 59.99,
      description: 'Become a full-stack web developer with this comprehensive bootcamp.'
    },
    {
      id: 6,
      title: 'Introduction to Machine Learning',
      instructor: 'David Brown',
      image: 'assets/courseimg6.jpeg',
      rating: 5,
      reviews: 180,
      price: 54.99,
      description: 'Learn the fundamentals of machine learning and data analysis.'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.course = this.courses.find(c => c.id === id);
  }
}
