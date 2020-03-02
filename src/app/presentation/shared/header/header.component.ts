import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() headingInfo: string;
  @Input() stickyTop: boolean;

  constructor() {
    this.stickyTop = false;
  }

  ngOnInit() {
  }

}
