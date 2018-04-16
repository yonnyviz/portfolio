import { Component, OnInit } from '@angular/core';
import { Link } from './link';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent implements OnInit {
  links = [
    new Link('', 'Home'),
    new Link('/about', 'About me'),
    new Link('/contact', 'Contact')
  ];
  socials = [
    {img:'assets/github.png', link:'https://github.com/yonnyviz/'},
    {img:'assets/linkedin.png', link:'https://www.linkedin.com/in/yonnyvizcaya/'}
  ];
  title: string;
  about: string;

  constructor() { 
    this.links;
    this.title = 'Yonny Vizcaya';
    this.about = "Me considero un espiritu autodidacta, me gusta aprender constantemente y enfrentarme a nuevos retos. Me encuentro en busca de nuevas oportunidades profesionales y hacer buenas amistades. Me gustaría tener la oportunidad de conocerte y usar mis habilidades para ayudarte a alcanzar tus objetivos.";
  }

  ngOnInit() {
  }
}
