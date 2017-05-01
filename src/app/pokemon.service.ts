import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class PokemonService {
  private apiUrl: string = 'https://pokeapi.co/api/v2';

  constructor(
    private http: Http
  ) { }

  initializeMyPokemons() {
    let myPokemons = JSON.parse(localStorage.getItem('my-pokemons'));
    if (!myPokemons) {
      myPokemons = [];
    }
    localStorage.setItem('my-pokemons', JSON.stringify(myPokemons));
  }

  getPokemons(offset: number): Observable<any[]> {
    return this.http
      .get(`${this.apiUrl}/pokemon?offset=${offset}`)
      .map((res: Response) => {
        let body = res.json();
        return body.results || {};
      })
      .catch(this.handleError);
  }

  getPokemonDetails(url: string): Observable<any[]> {
    return this.http
      .get(url)
      .map((res: Response) => {
        let body = res.json();
        return body || {};
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
