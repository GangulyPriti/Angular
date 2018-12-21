import { Component, OnInit } from '@angular/core';
import { Ingradients } from "../shared/ingradient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingradient : Ingradients[] = [
    new Ingradients('apples',5),
    new Ingradients('eggs',4),
    new Ingradients('milk',1),

  ];
  constructor() { }

  ngOnInit() {
  }

}
