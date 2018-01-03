import { Recipe } from './../../recipes.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Output() recipeDetails = new EventEmitter<void>();
  @Input() recipeItems: Recipe;

  constructor() { }

  emitRecipeDetail() {
      this.recipeDetails.emit();
  }

  ngOnInit() {
  }

}
