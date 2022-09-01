import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

const appRoutes : Routes = [
  {path : '', redirectTo : '/recipes' , pathMatch : 'full'},
  {path : '/recipes', component : RecipesComponent, children : [
    {path : 'recipe-list', component : RecipeListComponent},
    {path : 'recipe-detail', component : RecipeDetailComponent},
  ]},
  {path : '/shopping-list', component : ShoppingListComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule{

}