import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-me',
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
      post: "<p>Hola mi nombre es Yonny, soy desarrollador Front-End de applicaciones web. Actualmente trabajo como FrontEnd Developer en Waki ​​un emprendimiento Fintech, desarrollando y probando software, integrando y monitoreando servicios de computación en la nube (AWS).<p>"

    }
  }

  private showImage() {
    return "../../../../../assets/img/selfie2019_bw.JPG"
  }

}
