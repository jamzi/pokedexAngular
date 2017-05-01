import { Component } from '@angular/core';

import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokédex';

  constructor(
    private pokemonService: PokemonService,
  ) { }

  ngOnInit() {
    this.initializeMyPokemons();
  }

  initializeMyPokemons() {
    this.pokemonService.initializeMyPokemons();
  }
}
