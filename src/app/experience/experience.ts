import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      period: 'Jan 2022 - Present',
      location: 'New York, NY',
      responsibilities: [
        'Led a team of 5 developers in developing and maintaining enterprise-level web applications using Angular and Node.js',
        'Implemented microservices architecture resulting in 40% improvement in application performance',
        'Mentored junior developers and conducted code reviews to ensure code quality and best practices',
        'Collaborated with product managers to define technical requirements and project timelines'
      ]
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      period: 'Jun 2020 - Dec 2021',
      location: 'San Francisco, CA',
      responsibilities: [
        'Developed responsive web applications using React.js and Express.js',
        'Designed and implemented RESTful APIs serving over 100k daily users',
        'Optimized database queries resulting in 50% reduction in response time',
        'Integrated third-party APIs and services for enhanced functionality'
      ]
    },
    {
      role: 'Software Developer Intern',
      company: 'StartUp Tech',
      period: 'Jan 2020 - May 2020',
      location: 'Boston, MA',
      responsibilities: [
        'Assisted in developing features for a cloud-based SaaS platform',
        'Implemented unit tests and automated testing procedures',
        'Participated in daily stand-ups and sprint planning meetings',
        'Gained hands-on experience with Agile development methodologies'
      ]
    }
  ];
}