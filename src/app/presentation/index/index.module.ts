import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    IndexComponent
  ]
})
export class IndexModule { }
