import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from './../recipes/recipe.service';
import { Recipe } from '../recipes/recipes.model';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()

export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService) { }

    storeRecipe() {
        return this.http.put('https://plan-to-yummy.firebaseio.com/recipe.json', this.recipeService.getRecipe());
    }

    getRecipe() {
        this.http.get('https://plan-to-yummy.firebaseio.com/recipe.json')
            .map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
            )
            .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipe(recipes);
            }
            );
    }
}
