import { Component, OnInit } from '@angular/core';
import { ImageConfigService } from '../../shared/services/image-config.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  logo: string;

  constructor(private imageConfig: ImageConfigService) { }

  ngOnInit() {
    this.loadLogo();
  }
  
  private loadLogo() {
    this.logo = this.imageConfig.logo;
  }

}
