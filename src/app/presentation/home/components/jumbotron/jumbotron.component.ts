import { Component, OnInit, Input } from '@angular/core';

interface JumbotronContent { title: string, subtitle: string, paragraph: string }

@Component({
  selector: 'jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
  @Input() content: JumbotronContent;

  constructor() { }

  ngOnInit() {
    this.getContent()
  }

  getContent(): JumbotronContent {
    return this.content = {
      title: "Hola!",
      subtitle: "Mi nombre es Yonny.",
      paragraph: "Soy programador FULL STACK y diseñador web. Me considero autodidacta por conviccion porque me gusta aprender constantemente y enfrentarme a nuevos retos."
    }
  }

}
