import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchfieldComponent } from './components/searchfield/searchfield.component';
import { DetailsComponent } from './components/details/details.component';
import { CardsComponent } from './components/cards/cards.component';
import { IndicacionesComponent } from './components/indicaciones/indicaciones.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    SearchfieldComponent,
    DetailsComponent,
    CardsComponent,
    IndicacionesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
