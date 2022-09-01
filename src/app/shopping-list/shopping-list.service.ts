import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
  ingredientAdded = new EventEmitter<Ingredient[]>()

  ingredients : Ingredient[] = [
    new Ingredient('test ingredient 1', '1kg'),
    new Ingredient('test ingredient 2', '2kg')
  ]

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.ingredients.slice())
  }

  addIngredients(ingredients : Ingredient[]){
    this.ingredients.push(...ingredients)
    this.ingredientAdded.emit(this.ingredients.slice())
  }
}
