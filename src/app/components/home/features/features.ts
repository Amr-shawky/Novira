import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-features',
  imports: [MatIconModule],
  templateUrl: './features.html',
  styleUrl: './features.css'
})
export class Features {
   features = [
    {
      title: 'Personalized Learning Plans',
      desc: 'Tailored courses and resources designed to fit your learning pace and goals.',
      icon: 'school'
    },
    {
      title: 'Live Sessions',
      desc: 'Join interactive live classes with expert instructors in real-time.',
      icon: 'videocam'
    },
    {
      title: 'Student Dashboard',
      desc: 'Track your progress, manage courses, and get insights at a glance.',
      icon: 'dashboard'
    },
    {
      title: 'Community Networking',
      desc: 'Connect with peers, join study groups, and share knowledge.',
      icon: 'group'
    }
  ];
}
