import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingradients } from '../../shared/ingradient.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  } 
  addShoppingList() {
    this.recipeService.addIngradientToShoppingList(this.recipe.ingradient);
  }

}
