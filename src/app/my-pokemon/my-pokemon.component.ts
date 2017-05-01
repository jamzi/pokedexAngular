import { Component, OnInit } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material';

import { PokemonDetailsDialog } from './../pokemon-details/pokemon-details.component';

@Component({
  selector: 'app-my-pokemon',
  templateUrl: './my-pokemon.component.html',
  styleUrls: ['./my-pokemon.component.scss']
})
export class MyPokemonComponent implements OnInit {
  myPokemons: any[];

  constructor(
    public dialog: MdDialog,
    public snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.getMyPokemons();
  }

  getMyPokemons() {
    this.myPokemons = JSON.parse(localStorage.getItem('my-pokemons'));
  }

  showInfo(myPokemon: any) {
    let dialogRef = this.dialog.open(PokemonDetailsDialog);
    dialogRef.componentInstance.pokemonUrl = myPokemon.url;
  }

  delete(myPokemon: any) {
    this.myPokemons.splice(this.myPokemons.indexOf(myPokemon), 1);

    localStorage.setItem('my-pokemons', JSON.stringify(this.myPokemons));

    this.snackBar.open(`${myPokemon.name} was removed from My Pokémons`, '', { duration: 1500 });
  }
}
