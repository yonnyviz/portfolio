import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  //templateUrl: './home-page.component.html',
  //styleUrls: ['./home-page.component.css'],
  template: `
  <section class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <img src="assets/portrait.jpg" alt="..." class="img-fluid portrait">
        </div>
        <div class="col-md">
          <h1 class="display-3">{{title}}</h1>
          <h4 class="lead">{{subtitle}}</h4>
          <p class="">{{about}}</p>
        </div>
      </div>
    </div>
  </section>
  `,
  styles: [`
    .jumbotron {
      color: white; 
      border-radius: 0px;
      background: #494949;
    }
    .portrait {
      border-radius: 150px;
    }
  `],
})
export class HomePageComponent implements OnInit {
  title: string;
  subtitle: string;
  about: string;

  constructor() {
    this.title = "Hello World";
    this.subtitle = "Mi nombre es Yonny Vizcaya soy programador FULL STACK y diseñador web.";
    this.about = "Autodidacta por conviccion, me gusta aprender constantemente y enfrentarme a nuevos retos."
   }

  ngOnInit() {
  }

}
