import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SinglePatternComponent } from './single-pattern/single-pattern.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { ContainerPresentationalPatternComponent } from './container-presentational-pattern/container-presentational-pattern.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SinglePatternComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    ContainerPresentationalPatternComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
