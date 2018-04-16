import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { FooterComponent } from './footer/footer.component';
import { PortafolioService } from './portafolio.service';
import { SkillsComponent } from './skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    HomePageComponent,
    PortafolioComponent,
    FooterComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  PortafolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
