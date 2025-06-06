import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/zxaman',
      icon: 'fab fa-github'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aman-kumar-045a3a272/',
      icon: 'fab fa-linkedin'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/AMANKUM73320481',
      icon: 'fab fa-twitter'
    },
    {
      name: 'Email',
      url: 'mailto:amankumardk1@gmail.com',
      icon: 'fas fa-envelope'
    }
  ];
}
