import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'section-heading',
  templateUrl: './section-heading.component.html',
  styleUrls: ['./section-heading.component.scss']
})
export class SectionHeadingComponent implements OnInit {
  @Input() headingInfo: string;
  @Input() stickyTop: boolean;

  constructor() {
    this.stickyTop = false;
  }

  ngOnInit() {
  }

}
