import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('the test recipe','this recipe is in test','https://realhousemoms.com' +
      '/wp-content/uploads/Honey-Butter-Chicken-Easy-Dinner-Recipe-HERO.jpg'),
    new Recipe('the test recipe one','this recipe is in test one',
      'https://thewoksoflife.com/wp-content/uploads/2018/06/vegetable-chow-mein-16.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
