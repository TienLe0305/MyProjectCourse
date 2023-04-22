import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
import { Subject } from "rxjs";
@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe('Big Fat Burger',
    //      'What else you need to say?',
    //       'https://bigfatburgers.com/wp-content/uploads/2019/07/DoubleBaconCheeseBurger.jpg',
    //       [
    //         new Ingredient('Buns', 2),
    //         new Ingredient('Meat',1)
    //     ]),
    //     new Recipe('Tasty Schitzel',
    //      'A super-tasty Schnitzel - just awesome',
    //       'https://thumbs.dreamstime.com/z/gourmet-tasty-crumbled-schnitzel-crispy-fries-close-up-lemon-tomato-lettuce-50667370.jpg',
    //       [
    //         new Ingredient('French Fries', 20),
    //         new Ingredient('Meat',1)
    //     ])
    //   ];

    private recipes: Recipe[] = [];
    
    constructor(private shoppingListService : ShoppingListService){}  
    
    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
    
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes.slice()[index];
    }

    addIngredientsToShoppingList(ingredients : Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice())
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice())
    }
    
    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice())
    }
}