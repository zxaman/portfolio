import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer';
import { NavbarComponent } from '../navbar/navbar';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  about = {
    title: 'About Me',
    description: 'I am a passionate Full Stack Developer with expertise in Angular, React, Node.js, and various other modern technologies. I love creating efficient, scalable, and user-friendly applications that solve real-world problems.',
    education: [
      {
        degree: 'Bachelor of Technology in Computer Science',
        institution: 'Your University Name',
        year: '2019 - 2023',
        score: 'CGPA: 8.5/10'
      }
    ],
    interests: [
      'Web Development',
      'Cloud Computing',
      'Machine Learning',
      'Open Source',
      'Problem Solving'
    ]
  };
}
