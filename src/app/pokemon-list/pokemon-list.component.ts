import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnChanges, OnInit {

  @Input()
  pokemonList!: any[];

  currentPokemon!: any;

  @Output()
  onCurrentPokemonChange = new EventEmitter<any>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
      if (changes['pokemonList']) {
        this.currentPokemon = this.pokemonList[0];
        this.onCurrentPokemonChange.emit(this.currentPokemon);
      }
  }

  ngOnInit(): void {

  }

  changePokemon(pokemon: any): void {
    this.currentPokemon = pokemon;
    this.onCurrentPokemonChange.emit(this.currentPokemon)
  }

}
