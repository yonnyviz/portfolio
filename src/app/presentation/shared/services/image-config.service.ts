import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageConfigService {
  logo: string;
  constructor() { 
    this.logo = "assets/images/brand.png"
  }

}
