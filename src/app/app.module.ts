import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerCardComponent } from './banner-card/banner-card.component';
import { HeaderComponent } from './components/header/header.component';
import { AirplaneComponent } from './icons/airplane/airplane.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerCardComponent,
    AirplaneComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
