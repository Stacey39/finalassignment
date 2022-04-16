import { TaxFormComponent } from './tax-form/tax-form.component';
import { ContainerPresentationalPatternComponent } from './container-presentational-pattern/container-presentational-pattern.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { SinglePatternComponent } from './single-pattern/single-pattern.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pattern-one',
    component: SinglePatternComponent
  },
  {
    path: 'container-presentational',
    component: ContainerPresentationalPatternComponent,
  },
  {
    path: 'tax-form',
    component: TaxFormComponent,
  },
  {
    path: '',
    redirectTo: 'pattern-one',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
