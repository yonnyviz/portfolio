import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'software-stack',
  templateUrl: './software-stack.component.html',
  styleUrls: ['./software-stack.component.scss']
})
export class SoftwareStackComponent implements OnInit {
  developmentStacks: Array<any>;
  constructor() { }

  ngOnInit() {
    this.developmentStacks = this.loadSkills();
  }

  private loadSkills() {
    return [
      {
        stack_category: "Front-End Stack",
        stack_information: [
          {
            logo: "../../../../../assets/images/angular.png",
            name: "Angular",
            desc:"Angular es mi framework de preferencia para trabajar con applicaciones SPA ó Single Page Applications, debido a la variedad de herramientas que ofrece, su arquitectura modular y reusabilidad de componentes."
          },
          {
            logo: "../../../../../assets/images/bootstrap.png",
            name: "Bootstrap",
            desc:"Bootstrap es mi libreria de estilos o sistema de diseño que uso como base, debido a la organización"
          },
          {
            logo: "../../../../../assets/images/sass.png",
            name: "Sass",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis at maxime aliquid, officiis aperiam harum quae ipsum architecto culpa aspernatur pariatur, similique deserunt amet repudiandae nostrum. Eveniet, enim quae!"
          }
        ]
      },
      {
        stack_category: "Lenguajes",
        stack_information: [
          {
            logo: "../../../../../assets/images/html.png",
            name: "HTML",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis at maxime aliquid, officiis aperiam harum quae ipsum architecto culpa aspernatur pariatur, similique deserunt amet repudiandae nostrum. Eveniet, enim quae!"
          },
          {
            logo: "../../../../../assets/images/css.png",
            name: "CSS",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis at maxime aliquid, officiis aperiam harum quae ipsum architecto culpa aspernatur pariatur, similique deserunt amet repudiandae nostrum. Eveniet, enim quae!"
          },
          {
            logo: "../../../../../assets/images/js.png",
            name: "JavaScript",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis at maxime aliquid, officiis aperiam harum quae ipsum architecto culpa aspernatur pariatur, similique deserunt amet repudiandae nostrum. Eveniet, enim quae!"
          },
          {
            logo: "../../../../../assets/images/typescript.png",
            name: "TypeScript",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis at maxime aliquid, officiis aperiam harum quae ipsum architecto culpa aspernatur pariatur, similique deserunt amet repudiandae nostrum. Eveniet, enim quae!"
          },
          {
            logo: "../../../../../assets/images/python.png",
            name: "Python",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis at maxime aliquid, officiis aperiam harum quae ipsum architecto culpa aspernatur pariatur, similique deserunt amet repudiandae nostrum. Eveniet, enim quae!"
          },
          {
            logo: "../../../../../assets/images/bash.png",
            name: "Bash",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis at maxime aliquid, officiis aperiam harum quae ipsum architecto culpa aspernatur pariatur, similique deserunt amet repudiandae nostrum. Eveniet, enim quae!"
          }
        ]
      },
      {
        stack_category: "DevOps Stack",
        stack_information: [
          {
            logo: "../../../../../assets/images/docker.png",
            name: "Docker",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis at maxime aliquid, officiis aperiam harum quae ipsum architecto culpa aspernatur pariatur, similique deserunt amet repudiandae nostrum. Eveniet, enim quae!"
          },
          {
            logo: "../../../../../assets/images/aws.png",
            name: "AWS",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis at maxime aliquid, officiis aperiam harum quae ipsum architecto culpa aspernatur pariatur, similique deserunt amet repudiandae nostrum. Eveniet, enim quae!"
          }
        ]
      }
    ]
  }

}
