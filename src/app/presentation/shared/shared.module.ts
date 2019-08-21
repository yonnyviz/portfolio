import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  declarations: [
    TopNavigationComponent
  ],
  exports: [
    TopNavigationComponent,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
