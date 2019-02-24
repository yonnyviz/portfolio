import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    SharedModule
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    IndexComponent
  ]
})
export class IndexModule { }
