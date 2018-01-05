import { Recipe } from './../recipes.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [RecipeService]
})
export class RecipeListComponent implements OnInit {

  @Output() selectedRecipes = new EventEmitter<Recipe>();

  recipes: Recipe[];
  
  constructor(private recipeService: RecipeService) {
    this.recipes = recipeService.getRecipe();
  }

  selectedRecipe(recipe: Recipe) {
    this.selectedRecipes.emit(recipe);
  }

  ngOnInit() {
  }

}
