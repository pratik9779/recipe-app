import { Ingredient } from '../shared/ingredient.model';
import {Recipe} from './recipe.model'

export class RecipeService {

  recipes : Recipe[] = [
    new Recipe('test recipe 1', 'test recipe description 1', 'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg',
    [
      new Ingredient('apples', '1kg'),
      new Ingredient('oranges', '2kg')
    ]
    ),
    new Recipe('test recipe 2', 'test recipe description 2', 'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg',
    [
      new Ingredient('bread', '1kg'),
      new Ingredient('chicken', '2kg')
    ]
    )
  ]

  getRecipes(){
    return this.recipes;
  }

  getRecipe(id : number){
    return this.recipes[id-1]
  }
}
