import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

    onRecipeChanges = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('test',
            'this is test',
            'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/6/3/1/FNM_070111-Fried-Chicken-026_s4x3.jpg.rend.hgtvcom.966.725.suffix/1382539796174.jpeg'
            , [(new Ingredient('meat', 1)),
            new Ingredient('breaad', 2)]
        ),
        new Recipe('testing',
            'this is test',
            'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/6/3/1/FNM_070111-Fried-Chicken-026_s4x3.jpg.rend.hgtvcom.966.725.suffix/1382539796174.jpeg'
            , [(new Ingredient('meat', 1)),
            new Ingredient('breads', 2)]
        )
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipe() {
        return this.recipes.slice();
    }

    getRecipes(index: number) {
        return this.recipes[index];
    }

    addIngredientToShppinglist(ingredient: Ingredient[]) {
        this.slService.addIngredient(ingredient);
    }

    onAddRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.onRecipeChanges.next(this.recipes.slice());
    }

    onEditRecipe(recipe: Recipe, index: number) {
        this.recipes[index] = recipe;
        this.onRecipeChanges.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.onRecipeChanges.next(this.recipes.slice());
    }

    setRecipe(recipe: Recipe[]) {
        this.recipes = recipe;
        this.onRecipeChanges.next(this.recipes.slice());
    }

}
