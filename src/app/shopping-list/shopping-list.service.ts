import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {

    startedEditing = new Subject<number>();
    onIngredChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('tomatoes', 10),
    ];

    getEditedItem(index: number) {
        return this.ingredients[index];
    }

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

    updateIngredient(index: number, ingredient: Ingredient) {
        this.ingredients[index] = ingredient;
        this.onIngredChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.onIngredChanged.next(this.ingredients.slice());
    }
}
