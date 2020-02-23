import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeRoutingModule } from './home-routing.module';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SoftwareStackComponent } from './components/software-stack/software-stack.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    HomepageComponent,
    AboutMeComponent,
    SoftwareStackComponent,
    ProjectsComponent
  ]
})
export class HomeModule { }
