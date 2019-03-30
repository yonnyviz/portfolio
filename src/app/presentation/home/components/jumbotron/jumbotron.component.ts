import { Component, OnInit, Input } from '@angular/core';

interface JumbotronContent { title: string, subtitle: string }

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
      title: "Hola amigos.",
      subtitle: "Bienvenidos a mi website."
    }
  }

}
