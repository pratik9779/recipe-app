import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipewasSelected = new EventEmitter<Recipe>()

  recipes : Recipe[] = [
    new Recipe('test recipe 1', 'test recipe description 1', 'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg'),
    new Recipe('test recipe 2', 'test recipe description 2', 'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipeEl){
    this.recipewasSelected.emit(recipeEl)
  }

}
