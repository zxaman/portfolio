import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar";
import {  FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  imports: [NavbarComponent, FooterComponent]
})
export class HomeComponent {
  greeting = "Hi, I'm Aman Kumar";
  summary = "Recent BCA Graduate | Angular Developer | MEAN Stack | AI/ML | DevOps Enthusiast";
}