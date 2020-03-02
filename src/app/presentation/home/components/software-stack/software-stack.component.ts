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
            logo: "assets/images/angular.png",
            name: "Angular",
            desc:"Angular es mi framework de preferencia para trabajar con applicaciones SPA ó Single Page Applications, debido a la variedad de herramientas que ofrece, su arquitectura modular y reusabilidad de componentes."
          },
          {
            logo: "assets/images/bootstrap.png",
            name: "Bootstrap",
            desc:"Bootstrap es mi libreria de estilos o sistema de diseño que uso como base para el desarrollo de aplicaciones debido a su organización de componentes, sistema de grillas y por la flexibidad al momento de crear distintas tematicas."
          },
          {
            logo: "assets/images/sass.png",
            name: "Sass",
            desc:"Es el precompilador de estilos que uso debido a capacidad de crear variables, crear mixings el me permite crear configuraciones de diseño reusables en todo el proyecto."
          }
        ]
      },
      {
        stack_category: "Lenguajes",
        stack_information: [
          {
            logo: "assets/images/typescript.png",
            name: "TypeScript",
            desc:"Typescript es un metalenguaje que precompilador de Javascript el cual uso para implementar el framework de Angular en los proyectos y tambien facilita la programación orientada a objetes en NodeJS."
          },
          {
            logo: "assets/images/python.png",
            name: "Python",
            desc:"Mas que tod uso python para crear scripts automatizados o pequeños programas que mejoren mi productividad."
          },
          {
            logo: "assets/images/bash.png",
            name: "Bash",
            desc:"Bash lo uso para las tareas cotidianas que implica la administración de los sistemas operativos basados en Unix."
          }
        ]
      },
      {
        stack_category: "DevOps Stack",
        stack_information: [
          {
            logo: "assets/images/docker.png",
            name: "Docker",
            desc:"Uso Docker para virtualizar en un contenedor las aplicaciones para facilitar la distribución de la misma y crear una arquitectura orientada a microservicios, usando Docker Swarm como orquestador de contenedores."
          },
          {
            logo: "assets/images/aws.png",
            name: "AWS",
            desc:"Como tecnologia en la nube uso AWS por la variedad de servicios que ofrecen."
          }
        ]
      }
    ]
  }

}
