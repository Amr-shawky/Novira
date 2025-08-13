import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  user = {
    name: 'Amr Shawky',
    avatarUrl: '',
    role: 'student'
  };

  // إحصائيات مختصرة
  stats = {
    courses: 6,
    completedPercent: 57,
    certificates: 1,
    hours: 56
  };

  // كورسات تجريبية
  courses = [
    {
      id: 1,
      title: 'Mastering Angular for Beginners',
      instructor: 'John Doe',
      image: 'assets/courseimg1.webp',
      rating: 5,
      reviews: 120,
      price: 49.99,
      description: 'Learn Angular step-by-step from the basics to advanced concepts.',
      lastActivity: '2 days ago',
      progress: 42
    },
    {
      id: 2,
      title: 'React Fundamentals',
      instructor: 'Jane Smith',
      image: 'assets/courseimg2.webp',
      rating: 4,
      reviews: 85,
      price: 39.99,
      description: 'Build modern web apps with React and master component-based architecture.',
      lastActivity: '1 week ago',
      progress: 72
    },
    {
      id: 3,
      title: 'Node.js API Development',
      instructor: 'Mike Johnson',
      image: 'assets/nodejs.png',
      rating: 5,
      reviews: 200,
      price: 59.99,
      description: 'Create robust backends using Node.js, Express, and MongoDB.',
      lastActivity: '2 days ago',
      progress: 90
    },
    {
      id: 4,
      title: 'Python for Data Science',
      instructor: 'Emily Davis',
      image: 'assets/courseimg4.jpeg',
      rating: 3,
      reviews: 150,
      price: 44.99,
      description: 'Analyze data and build machine learning models with Python.',
      lastActivity: '1 week ago',
      progress: 25
    },
    {
      id: 5,
      title: 'Web Development Bootcamp',
      instructor: 'Chris Lee',
      image: 'assets/courseimg5.jpeg',
      rating: 4,
      reviews: 300,
      price: 59.99,
      description: 'Become a full-stack web developer with this comprehensive bootcamp.',
      lastActivity: '2 weeks ago',
      progress: 100
    },
    {
      id: 6,
      title: 'Introduction to Machine Learning',
      instructor: 'David Brown',
      image: 'assets/courseimg6.jpeg',
      rating: 5,
      reviews: 180,
      price: 54.99,
      description: 'Learn the fundamentals of machine learning and data analysis.',
      lastActivity: '1 week ago',
      progress: 69
    }
  ];

  notifications = [
    { id: 1, text: 'New lesson released in Mastering Angular', time: '3h' },
    { id: 2, text: 'Certificate available for UI/UX Design', time: '2d' }
  ];

  // UI state
  showNotifications = false;
  showCourseDetailsId: number | null = null;

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }

  toggleCourseDetails(id: number) {
    this.showCourseDetailsId = this.showCourseDetailsId === id ? null : id;
  }

  markComplete(course: any) {
    course.progress = 100;
  }
}