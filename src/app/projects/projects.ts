import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with real-time inventory management and payment processing',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe API'],
      features: [
        'User authentication and authorization',
        'Product catalog with search and filter functionality',
        'Shopping cart and wishlist management',
        'Secure payment processing with Stripe integration',
        'Order tracking and history'
      ],
      github: 'https://github.com/username/e-commerce',
      demo: 'https://e-commerce-demo.com'
    },
    {
      title: 'Task Management System',
      description: 'A collaborative task management application for teams with real-time updates',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Socket.io'],
      features: [
        'Real-time task updates and notifications',
        'Team collaboration tools',
        'Project progress tracking',
        'File sharing and comments',
        'Customizable dashboards'
      ],
      github: 'https://github.com/username/task-manager',
      demo: 'https://task-manager-demo.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather forecasting application with interactive maps and detailed weather data',
      technologies: ['Angular', 'OpenWeather API', 'Leaflet.js', 'Chart.js'],
      features: [
        'Real-time weather updates',
        'Interactive weather maps',
        '5-day weather forecast',
        'Weather alerts and notifications',
        'Location-based weather data'
      ],
      github: 'https://github.com/username/weather-dashboard',
      demo: 'https://weather-dashboard-demo.com'
    }
  ];
}
