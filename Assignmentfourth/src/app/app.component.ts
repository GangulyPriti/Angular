import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  incrementingNumber = [];
  onGameStarted(data:{numberValue: any}) {
    this.incrementingNumber.push(data.numberValue);
  }
}
