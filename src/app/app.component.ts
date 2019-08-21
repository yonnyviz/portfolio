import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation, slideInAnimationCopy } from './presentation/shared/animations/router-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimationCopy
  ]
})
export class AppComponent {
  title = 'app';
  
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
