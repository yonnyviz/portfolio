import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css'],
})
export class PortafolioComponent implements OnInit {
  projects = [
    { 
      name:'La Blanda Val', 
      img:'assets/lbv.png',
      link:'https://www.lablandaval.com/',
      info: 'Pagina web informativa creada para una empresa de alimentos, usando las tecnicas de SPA conocido como Single Page Application usando tecnologia Angular, Bootstrap y NodeJs.',
      tech: [
        {image:'assets/angular.png'}
      ]
    },
    { 
      name:'Alimentos Vizcaya', 
      img:'assets/alimentosvizcaya.png',
      link:'https://yonnyviz.github.io/alimentosvizcaya/',
      info: 'Landing page creada para el lanzamiento de un producto. Tecnologias usadas: Angular, Bootstrap y NodeJs.',
      tech: [
        {image:'assets/angular.png'}
      ]
    }
  ];

  constructor() {}

  ngOnInit() {
  }

}
