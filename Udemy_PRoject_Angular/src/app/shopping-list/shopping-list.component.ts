import { Component, OnInit } from '@angular/core';
import { Ingradients } from "../shared/ingradient.model";
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingradient: Ingradients[];
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingradient = this.slService.getIngradients();
    this.slService.ingradientsChanged
      .subscribe((newIngradient: Ingradients[]) => {
        this.ingradient = newIngradient;
      });
  }
  

}
