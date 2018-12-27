import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class EvenComponent implements OnInit {
@Input('evenElement') evenElement;
  constructor() { }

  ngOnInit() {
  }

}
