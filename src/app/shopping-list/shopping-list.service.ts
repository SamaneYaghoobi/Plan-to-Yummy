import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {

    onIngredChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('tomatoes', 10),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    onIngredientAdd(addIng: Ingredient) {
        this.ingredients.push(addIng);
        this.onIngredChanged.next(this.ingredients.slice());
    }


    addIngredient(ingredient: Ingredient[]) {
        this.ingredients.push(...ingredient);
        this.onIngredChanged.next(this.ingredients.slice());
    }
}