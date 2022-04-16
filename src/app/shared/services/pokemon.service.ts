import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(
    private http: HttpClient
  ) { }

  // getPokemonList(): Observable<any> {
  //   return this.http.get(`${this.POKE_API_URL}?limit=9`).pipe(
  //     pluck('name')
  //   );
  // }

  getPokemonList(): Observable<any> {
    return this.http.get(`${this.POKE_API_URL}?limit=9`).pipe(
      pluck('results'),
    );
  }

  getPokemonDetail(name: string): Observable<any> {
    return this.http.get(`${this.POKE_API_URL}${name}`);
  }


}
