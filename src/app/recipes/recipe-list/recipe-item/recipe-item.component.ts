import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../recipes.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItems: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelectedRecipe() {
    this.recipeService.selectedRecipe.emit(this.recipeItems);
  }

}
