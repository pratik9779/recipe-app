import {Subject} from "rxjs"
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
  ingredientAdded = new Subject<Ingredient[]>()

  ingredients : Ingredient[] = [
    new Ingredient('test ingredient 1', '1kg'),
    new Ingredient('test ingredient 2', '2kg')
  ]

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(this.ingredients.slice())
  }

  addIngredients(ingredients : Ingredient[]){
    this.ingredients.push(...ingredients)
    this.ingredientAdded.next(this.ingredients.slice())
  }
}
