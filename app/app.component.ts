import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',.
  //styleUrls: ['./app.component.css'],
  template: `
    <app-main-navigation></app-main-navigation>
    <app-home-page></app-home-page>
    <app-skills></app-skills>
    <app-portafolio></app-portafolio>
  `,
})
export class AppComponent {
  title = 'app';
}
