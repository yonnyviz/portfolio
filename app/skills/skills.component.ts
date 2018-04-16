import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills = [
    {name: 'HTML5', src: 'assets/html5.png', porcentage: '90%'}, 
    {name: 'CSS3',  src: 'assets/css3.png', porcentage: '75%'},
    {name: 'JavaScript',  src: 'assets/js.png', porcentage: '75%'},
    {name: 'Bootstrap',  src: 'assets/bootstrap.png', porcentage: '90%'},
    {name: 'php',  src: 'assets/php.png', porcentage: '75%'},
    {name: 'Mysql',  src: 'assets/mysql.png', porcentage: '50%'},
    {name: 'Angular',  src: 'assets/angular.png', porcentage: '75%'},
    {name: 'React',  src: 'assets/react.png', porcentage: '50%'},
    {name: 'Node',  src: 'assets/node.png', porcentage: '65%'},
    {name: 'Firebase',  src: 'assets/firebase.png', porcentage: '50%'},
    {name: 'Photoshop',  src: 'assets/photoshop.png', porcentage: '75%'},
    {name: 'Illustrator',  src: 'assets/illustrator.png', porcentage: '60%'}
    ];

  constructor() {}

  ngOnInit() {
  }

}
