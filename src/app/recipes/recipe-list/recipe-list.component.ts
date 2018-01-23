import { Recipe } from './../recipes.model';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) {
    this.recipes = recipeService.getRecipe();
  }

  ngOnInit() {
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
