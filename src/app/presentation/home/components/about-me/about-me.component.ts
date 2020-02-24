import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
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
    return "../../../../../assets/images/selfie2019_bw.JPG"
  }

}
