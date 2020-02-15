import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { RouterModule } from '@angular/router';
import { SectionHeadingComponent } from './section-heading/section-heading.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TopNavigationComponent,
    SectionHeadingComponent
  ],
  exports: [
    TopNavigationComponent,
    SectionHeadingComponent
  ]
})
export class SharedModule { }
