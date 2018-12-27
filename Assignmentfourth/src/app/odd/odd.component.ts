import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class OddComponent implements OnInit {
@Input ('oddElement') oddElement;
  constructor() { }

  ngOnInit() {
  }

}
