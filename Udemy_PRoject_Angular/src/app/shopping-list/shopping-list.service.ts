import { Ingradients } from "../shared/ingradient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
  ingradientsChanged = new EventEmitter<Ingradients[] >();
  private ingradient: Ingradients[] = [
    new Ingradients('apples', 5),
    new Ingradients('eggs', 4),
    new Ingradients('milk', 1),

  ];
  getIngradients() {
    return this.ingradient.slice();
  }
  addIngradients(newItem: Ingradients) {
    this.ingradient.push(newItem);
    this.ingradientsChanged.emit(this.ingradient.slice());
  }
  addingIngradients(ingradient: Ingradients[]) {
    this.ingradient.push(...ingradient);
    this.ingradientsChanged.emit(this.ingradient.slice());
  }
}
