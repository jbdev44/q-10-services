import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[] = [];

  constructor(public CocktailService: CocktailService) {}

  ngOnInit(): void {
    this.CocktailService.getCocktails().subscribe((cocktailsFromJsonFile) => {
      this.cocktails = cocktailsFromJsonFile;
    });
  }
}
