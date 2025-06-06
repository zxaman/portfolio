import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.html',
  styleUrls: ['./achievements.scss']
})
export class AchievementsComponent {
  achievements = [
    {
      title: 'Best Innovation Award',
      organization: 'Tech Conference 2023',
      description: 'Awarded for developing an AI-powered code review system that improved team productivity by 40%.',
      date: 'November 2023'
    },
    {
      title: 'Open Source Contributor',
      organization: 'GitHub',
      description: 'Contributed to major open-source projects with over 100 merged pull requests and 500+ stars.',
      date: 'Ongoing'
    },
    {
      title: 'Hackathon Winner',
      organization: 'Global Tech Hackathon',
      description: 'Led a team of 4 to win first place by developing a sustainable energy monitoring system.',
      date: 'July 2023'
    }
  ];
}