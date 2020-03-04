import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { RouterModule } from '@angular/router';
import { SectionHeadingComponent } from './section-heading/section-heading.component';
import { HeaderComponent } from './header/header.component';
import { ImageConfigService } from './services/image-config.service';
import { CubeComponent } from './cube/cube.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TopNavigationComponent,
    SectionHeadingComponent,
    HeaderComponent,
    CubeComponent
  ],
  providers: [
    ImageConfigService
  ],
  exports: [
    TopNavigationComponent,
    SectionHeadingComponent,
    HeaderComponent,
    CubeComponent

  ]
})
export class SharedModule { }
