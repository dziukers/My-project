import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({providedIn: 'root'})

export class ShoppingListService {

   private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];
      getIngredients() {
          return this.ingredients;
      }

    addIngredient(ingredient) {
        this.ingredients.push(ingredient)
    }

    deleteIngredient(id: number) {
        this.ingredients.splice(id, 1);
    }
}