import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeShowDetail: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeShowDetail = this.recipeService.getRecipes(this.id);
      }
    );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientToShppinglist(this.recipeShowDetail.ingredients);
  }
}
