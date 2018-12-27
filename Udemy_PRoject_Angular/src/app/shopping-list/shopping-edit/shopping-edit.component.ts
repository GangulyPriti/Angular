import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingradients} from "../../shared/ingradient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() newItem = new EventEmitter<Ingradients>();
  constructor() { }

  ngOnInit() {
  }
  onAddItems() {
    const newIngradient = new
    Ingradients(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.newItem.emit(newIngradient);
  }

}
