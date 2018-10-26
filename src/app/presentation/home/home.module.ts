import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    HomeRoutingModule,
  ],
  declarations: [IndexComponent]
})
export class HomeModule { }
