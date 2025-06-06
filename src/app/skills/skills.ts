import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent {
  skills = {
    'Programming Languages': [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'C++', level: 70 }
    ],
    'Frontend Development': [
      { name: 'Angular', level: 90 },
      { name: 'React', level: 85 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3/SCSS', level: 90 },
      { name: 'Bootstrap', level: 85 }
    ],
    'Backend Development': [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'Django', level: 75 },
      { name: 'Spring Boot', level: 70 }
    ],
    'Databases': [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'PostgreSQL', level: 75 }
    ],
    'DevOps & Tools': [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'Jenkins', level: 70 },
      { name: 'Jira', level: 85 }
    ]
  };
}
