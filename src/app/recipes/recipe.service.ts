import { EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';

export class RecipeService {

    selectedRecipe = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('test', 'this is test', 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/6/3/1/FNM_070111-Fried-Chicken-026_s4x3.jpg.rend.hgtvcom.966.725.suffix/1382539796174.jpeg'),
        new Recipe('testing', 'this is test', 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/6/3/1/FNM_070111-Fried-Chicken-026_s4x3.jpg.rend.hgtvcom.966.725.suffix/1382539796174.jpeg')
    ];

    getRecipe() {
        return this.recipes.slice();
    }
}