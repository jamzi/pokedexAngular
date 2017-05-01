import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdProgressSpinnerModule, MdListModule, MdSidenavModule, MdToolbarModule, MdIconModule, MdCardModule, MdDialogModule, MdSnackBarModule, MdChipsModule } from "@angular/material";

import { AppComponent } from './app.component';
import { MyPokemonComponent } from './my-pokemon/my-pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsDialog } from './pokemon-details/pokemon-details.component';

import { PokemonService } from './pokemon.service';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent
  },
  {
    path: 'my',
    component: MyPokemonComponent
  },
  {
    path: 'pokemon',
    component: PokemonListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MyPokemonComponent,
    PokemonListComponent,
    PokemonDetailsDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdSidenavModule,
    MdListModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdProgressSpinnerModule,
    MdDialogModule,
    MdSnackBarModule,
    MdChipsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent],
  entryComponents: [PokemonDetailsDialog]
})
export class AppModule { }
