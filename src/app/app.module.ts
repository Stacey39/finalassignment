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
import { AddItemComponent } from './tax-form/add-item/add-item.component';
import { FormsModule } from '@angular/forms';
import { ItemsComponent } from './tax-form/items/items.component';
import { TaxFormComponent } from './tax-form/tax-form.component';
import { TotalComponent } from './tax-form/total/total.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SinglePatternComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    ContainerPresentationalPatternComponent,
    AddItemComponent,
    ItemsComponent,
    TaxFormComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
