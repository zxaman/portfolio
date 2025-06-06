import { Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home';
import { AboutComponent } from '../app/about/about';
import { SkillsComponent } from '../app/skills/skills';
import { ExperienceComponent } from '../app/experience/experience';
import { ProjectsComponent } from '../app/projects/projects';
import { CertificationsComponent } from '../app/certifications/certifications';
import { AchievementsComponent } from '../app/achievements/achievements';
import { ContactComponent } from '../app/contact/contact';
import { NavbarComponent } from './navbar/navbar';
import {  FooterComponent } from './footer/footer';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'navbar', component: NavbarComponent},
  { path: 'footer', component: FooterComponent },
  { path: '**', redirectTo: '' }
];
