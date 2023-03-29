import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://lh3.googleusercontent.com/3MTaO0OfMwrDKcuhwDjHzKKdO-_daDhCPCqmFfSZSkQC5oXq60Ogpd6I57zjE-ZSsCrom1Wrw4i305jccSlbNXMQ1oaI7AVvMA=w1667-h1667-c-rj-v1-e365'),
    new Recipe('A Test Recipe2', 'This is simply a test2', 'https://lh3.googleusercontent.com/3MTaO0OfMwrDKcuhwDjHzKKdO-_daDhCPCqmFfSZSkQC5oXq60Ogpd6I57zjE-ZSsCrom1Wrw4i305jccSlbNXMQ1oaI7AVvMA=w1667-h1667-c-rj-v1-e365')
  ];
  
  
  
  constructor() {

  }
  ngOnInit(): void {
    
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
