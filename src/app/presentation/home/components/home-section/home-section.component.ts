import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit {
  homeInfo: any;
  imgSrc: any;
  constructor() { }

  ngOnInit() {
    this.homeInfo = this.showHomeInformation();
    this.imgSrc = this.showImage();
  }

  private showHomeInformation() {
    return {
      brand: "Yonny Vizcaya",
      title: "Me motiva crear soluciones digitales que impacten positivamente nuestro futuro.",
      post: "Hola soy Yonny, desarrollador Front-End de applicaciones web, actualmente Desarrollador Front-End en Waki."
    }
  }

  private showImage() {
    return "../../../../../assets/img/selfie2019_bw.JPG"
  }

}
