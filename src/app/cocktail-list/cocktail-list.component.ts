import { Component } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
})
export class CocktailListComponent {
  cocktails: Array<Cocktail>;
  constructor(public CocktailService: CocktailService) {
    this.cocktails = CocktailService.getCocktails();
  }
}
