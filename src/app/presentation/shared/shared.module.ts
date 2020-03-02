import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { RouterModule } from '@angular/router';
import { SectionHeadingComponent } from './section-heading/section-heading.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TopNavigationComponent,
    SectionHeadingComponent,
    HeaderComponent
  ],
  exports: [
    TopNavigationComponent,
    SectionHeadingComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
