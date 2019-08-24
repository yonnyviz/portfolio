import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation, opacityAnimation } from './presentation/shared/animations/router-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: []
})
export class AppComponent {
  title = 'app';
  
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
