import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail.model';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  //cocktails: Array<Cocktail> = [];
  cocktails: Array<Cocktail> = [
    new Cocktail('mojito', 1, 'img'),
    new Cocktail('azert', 2, 'img'),
    new Cocktail('qsdfg', 3, 'img'),
    new Cocktail('wxcv', 4, 'img'),
    new Cocktail('martini', 5, 'img'),
    new Cocktail('pastis', 6, 'img'),
    new Cocktail('coci', 7, 'img'),
  ];
  constructor() {}
  public getCocktails(): Array<Cocktail> {
    console.log('liste des cockatils', this.cocktails);
    return this.cocktails;
  }
}
