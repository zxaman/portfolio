import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrls: ['./certifications.scss']
})
export class CertificationsComponent {
  certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'Dec 2023',
      credentialId: 'AWS-123456',
      link: 'https://aws.amazon.com/certification/verify'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: 'Oct 2023',
      credentialId: 'GCP-789012',
      link: 'https://google.com/cloud/certifications/verify'
    },
    {
      name: 'Microsoft Certified: Azure Developer Associate',
      issuer: 'Microsoft',
      date: 'Aug 2023',
      credentialId: 'AZURE-345678',
      link: 'https://microsoft.com/certifications/verify'
    }
  ];
}