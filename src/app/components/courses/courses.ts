import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { CourseList } from './course-list/course-list';
import { CourseDetails } from './course-details/course-details';
import { CourseVideoPlayer } from './course-video-player/course-video-player';
import { CourseProgress } from './course-progress/course-progress';
import { FilterSidebar } from '../shared/filter-sidebar/filter-sidebar';

@Component({
  selector: 'app-courses',
  imports: [
    CommonModule,
    CourseList,
    CourseDetails,
    CourseVideoPlayer,
    CourseProgress,
    FilterSidebar,
  ],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
  courses = [
    {
      id: 1,
      title: 'Vue.js from Scratch',
      instructor: 'Sophia Wilson',
      image: 'assets/courses/course1.jpeg',
      rating: 4,
      reviews: 95,
      price: 34.99,
      description:
        'Learn Vue.js and build interactive, modern web applications with ease.',
    },
    {
      id: 2,
      title: 'Django Web Development',
      instructor: 'Daniel Martinez',
      image: 'assets/courses/course2.jpeg',
      rating: 5,
      reviews: 140,
      price: 49.99,
      description:
        'Master Django and create secure, scalable, and dynamic web applications.',
    },
    {
      id: 3,
      title: 'Flutter Mobile Apps',
      instructor: 'Isabella Clark',
      image: 'assets/courses/course3.jpeg',
      rating: 4,
      reviews: 110,
      price: 44.99,
      description: 'Build cross-platform mobile apps using Flutter and Dart.',
    },
    {
      id: 4,
      title: 'Java Programming Essentials',
      instructor: 'Matthew Harris',
      image: 'assets/courses/course4.jpeg',
      rating: 3,
      reviews: 80,
      price: 39.99,
      description:
        'Get started with Java programming, OOP concepts, and backend basics.',
    },
    {
      id: 5,
      title: 'Cybersecurity for Beginners',
      instructor: 'Olivia Walker',
      image: 'assets/courses/course5.jpeg',
      rating: 5,
      reviews: 220,
      price: 59.99,
      description:
        'Learn how to protect systems, networks, and data from cyber threats.',
    },
    {
      id: 6,
      title: 'SQL & Database Design',
      instructor: 'Ethan Lewis',
      image: 'assets/courses/course6.jpeg',
      rating: 4,
      reviews: 130,
      price: 29.99,
      description:
        'Master SQL queries and relational database design for real-world applications.',
    },
    {
      id: 7,
      title: 'UI/UX Design Principles',
      instructor: 'Amelia Young',
      image: 'assets/courses/course7.jpeg',
      rating: 5,
      reviews: 175,
      price: 54.99,
      description:
        'Learn the principles of user interface and user experience design.',
    },
    {
      id: 8,
      title: 'Kotlin for Android Development',
      instructor: 'James Hall',
      image: 'assets/courses/course8.jpeg',
      rating: 4,
      reviews: 90,
      price: 42.99,
      description: 'Build native Android apps using Kotlin and Android Studio.',
    },
    {
      id: 9,
      title: 'AWS Cloud Practitioner',
      instructor: 'Charlotte King',
      image: 'assets/courses/course9.jpeg ',
      rating: 5,
      reviews: 210,
      price: 64.99,
      description:
        'Understand AWS services and prepare for the AWS Cloud Practitioner exam.',
    },
    {
      id: 10,
      title: 'C# and .NET Development',
      instructor: 'Benjamin Scott',
      image: 'assets/courses/course10.jpeg',
      rating: 3,
      reviews: 70,
      price: 37.99,
      description:
        'Learn C# programming and build applications using the .NET framework.',
    },
    {
      id: 11,
      title: 'Mastering Angular for Beginners',
      instructor: 'John Doe',
      image: 'assets/courseimg1.webp',
      rating: 5,
      reviews: 120,
      price: 49.99,
      description:
        'Learn Angular step-by-step from the basics to advanced concepts.',
    },
    {
      id: 12,
      title: 'React Fundamentals',
      instructor: 'Jane Smith',
      image: 'assets/courseimg2.webp',
      rating: 4,
      reviews: 85,
      price: 39.99,
      description:
        'Build modern web apps with React and master component-based architecture.',
    },
    {
      id: 13,
      title: 'Node.js API Development',
      instructor: 'Mike Johnson',
      image: 'assets/nodejs.png',
      rating: 5,
      reviews: 200,
      price: 59.99,
      description:
        'Create robust backends using Node.js, Express, and MongoDB.',
    },
    {
      id: 14,
      title: 'Python for Data Science',
      instructor: 'Emily Davis',
      image: 'assets/courseimg4.jpeg',
      rating: 3,
      reviews: 150,
      price: 44.99,
      description:
        'Analyze data and build machine learning models with Python.',
    },
    {
      id: 15,
      title: 'Web Development Bootcamp',
      instructor: 'Chris Lee',
      image: 'assets/courseimg5.jpeg',
      rating: 4,
      reviews: 300,
      price: 59.99,
      description:
        'Become a full-stack web developer with this comprehensive bootcamp.',
    },
    {
      id: 16,
      title: 'Introduction to Machine Learning',
      instructor: 'David Brown',
      image: 'assets/courseimg6.jpeg',
      rating: 5,
      reviews: 180,
      price: 54.99,
      description:
        'Learn the fundamentals of machine learning and data analysis.',
    },
  ];

  selectedCourseId = signal<number | null>(null);

  filters = signal({
    search: '',
    category: '',
    level: '',
    duration: '',
  });
  selectCourse(id: number) {
    this.selectedCourseId.set(id);
  }

  clearSelection() {
    this.selectedCourseId.set(null);
  }

  applyFilters(filters: any) {
    this.filters.set(filters);
    console.log('Applied filters:', filters);
    // هنا ممكن تضيف فلترة حقيقية للكورس
  }
}
