import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';

import { PokemonDetailsDialog } from './../pokemon-details/pokemon-details.component';

import { PokemonService } from './../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  loaded: boolean = false;
  offset: number = 0;

  constructor(
    private pokemonService: PokemonService,
    public dialog: MdDialog,
    public snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService.getPokemons(this.offset).subscribe(
      data => {
        this.pokemons = this.pokemons.concat(data),
        this.loaded = true
      },
      error => console.error(error)
    );
  }

  getMorePokemons() {
    this.offset += 20;
    this.getPokemons();
  }

  showInfo(pokemon: any) {
    let dialogRef = this.dialog.open(PokemonDetailsDialog);
    dialogRef.componentInstance.pokemonUrl = pokemon.url;
  }

  save(pokemon: any) {
    let myPokemons = JSON.parse(localStorage.getItem('my-pokemons'));
    myPokemons.push(pokemon);

    localStorage.setItem('my-pokemons', JSON.stringify(myPokemons));

    this.snackBar.open(`${pokemon.name} was saved to My Pokémons`, '', { duration: 1500 });
  }
}
