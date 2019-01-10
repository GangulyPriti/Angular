import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingradients } from "../shared/ingradient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Honey Butter Chicken', 'A Chicken!-- that loves to dive in butter!!!!',
      'https://realhousemoms.com/wp-content/uploads/Honey-Butter-Chicken-Easy-Dinner-Recipe-HERO.jpg',
      [
        new Ingradients('Chicken', 2),
        new Ingradients('butter',1)
      ]),
    new Recipe('Vegetable Chowmeine', 'A Supar Tasty!! - Health Yumm..',
      'https://thewoksoflife.com/wp-content/uploads/2018/06/vegetable-chow-mein-16.jpg',
      [
        new Ingradients('Chowmin', 2),
        new Ingradients('Vegetables',5)
      ])
  ];

  constructor(private slService: ShoppingListService) {

  }
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngradientToShoppingList(ingradient: Ingradients[]) {
    this.slService.addingIngradients(ingradient);
  }
}
