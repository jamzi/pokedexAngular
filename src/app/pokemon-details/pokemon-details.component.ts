import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { PokemonService } from './../pokemon.service';

@Component({
  selector: 'pokemon-details-dialog',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsDialog implements OnInit {
  pokemonUrl: any;
  pokemon: any = {};
  pokemonMoves: any[] = [];
  loaded: boolean = false;
  
  constructor(
    public dialogRef: MdDialogRef<PokemonDetailsDialog>,
    private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemonDetails();
  }

  getPokemonDetails() {
    this.pokemonService.getPokemonDetails(this.pokemonUrl).subscribe(
      data => {
        this.pokemon = data;
        this.pokemonMoves = this.pokemon.moves.slice(0, 5);
        this.loaded = true;
      },
      error => console.error(error)
    );
  }
}
