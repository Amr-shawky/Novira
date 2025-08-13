import { CommonModule } from '@angular/common';
import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-certificates',
  imports: [CommonModule],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css'
})
export class Certificates {
@Input() certificates: any[] = [
    {
      title: 'Mastering Angular for Beginners',
      date: '2025-06-20',
      instructor: 'John Doe',
      certificateId: 'ANG-2025-001',
      image: 'assets/courses/courseimg1.webp'
    },
    {
      title: 'React Fundamentals',
      date: '2025-05-12',
      instructor: 'Jane Smith',
      certificateId: 'REACT-2025-002',
      image: 'assets/courses/courseimg2.webp'
    },
    {
      title: 'Python for Data Science',
      date: '2025-04-01',
      instructor: 'Emily Davis',
      certificateId: 'PYDS-2025-003',
      image: 'assets/courses/courseimg4.jpeg'
    }
  ];
}
