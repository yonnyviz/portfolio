import { Component, OnInit } from '@angular/core';
import { Navigation } from 'src/app/domain/entities/navigation-entity';

@Component({
  selector: 'top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  navigation: Navigation;

  constructor(
  ) { }

  ngOnInit() {
    this.navigation = Navigation.loadTopNavigationLinks();
  }

}
