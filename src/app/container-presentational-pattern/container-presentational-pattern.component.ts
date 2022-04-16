import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../shared/services/pokemon.service';

@Component({
  selector: 'app-container-presentational-pattern',
  templateUrl: './container-presentational-pattern.component.html',
  styleUrls: ['./container-presentational-pattern.component.scss']
})
export class ContainerPresentationalPatternComponent implements OnInit {

  pokemonList!: any[];

  pokemon: any;
  pokemonDetail: any;

  constructor(private pokemonService: PokemonService) {
      this.pokemonService.getPokemonList().subscribe((pokemonList) => this.pokemonList = pokemonList)
   }

  ngOnInit(): void {}

  getPokemonDetail(name: string): void {
    this.pokemonDetail = '';
    this.pokemonService.getPokemonDetail(name).subscribe((pokemon) => {
      this.pokemonDetail = pokemon;
    });
  }

}
