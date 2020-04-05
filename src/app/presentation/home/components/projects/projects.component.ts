import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  imgSrc: any;
  constructor() { }

  ngOnInit() {
    this.imgSrc = this.showImage();
  }

  private showImage() {
    return "assets/images/waki-logo.png"
  }

}
