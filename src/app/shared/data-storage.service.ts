import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RecipeService } from './../recipes/recipe.service';

@Injectable()

export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService) { }

    storeRecipe() {
        return this.http.put('https://plan-to-yummy.firebaseio.com/recipe.json', this.recipeService.getRecipe());
    }
}
