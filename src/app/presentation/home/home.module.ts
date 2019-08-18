import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

import { IndexComponent } from './index/index.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { NewsComponent } from './components/news/news.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    HomeRoutingModule,
  ],
  declarations: [IndexComponent, JumbotronComponent, NewsComponent]
})
export class HomeModule { }
