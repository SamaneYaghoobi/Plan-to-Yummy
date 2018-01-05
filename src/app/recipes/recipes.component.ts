import { RecipeService } from './recipe.service';
import { Recipe } from './recipes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {

  recipeWasSelected: Recipe;

  constructor(private recipeService: RecipeService) {
   }

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe(
      (recipe:Recipe)=>{
        this.recipeWasSelected=recipe;
      }
    );
  }

}
