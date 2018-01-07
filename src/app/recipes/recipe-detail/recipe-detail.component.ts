import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipes.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeShowDetail: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientToShppinglist(this.recipeShowDetail.ingredients);
  }
}
