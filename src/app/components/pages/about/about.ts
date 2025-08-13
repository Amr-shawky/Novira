import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  team = [
    {
      name: 'Sarah Ahmed',
      role: 'Founder & CEO',
      img: 'assets/person1.jpeg'
    },
    {
      name: 'Omar Khaled',
      role: 'Head of Learning',
      img: 'assets/person2.jpeg'
    },
    {
      name: 'Mona Samir',
      role: 'Community Manager',
      img: 'assets/person3.jpeg'
    }
  ];
}
