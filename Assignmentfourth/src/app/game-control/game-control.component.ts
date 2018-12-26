import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('incrementedNumber') incrementedNumber = new EventEmitter<{numberValue: number}>();

  constructor() { }

  ngOnInit() {
    setInterval(function(){
      if (i == 100) clearInterval(this);
      else console.log( 'Currently at ' + (i++) );
    }, 1000);
  }
  onGameStart() {
    console.log('game start');
    this.incrementedNumber.emit()
  }
  onGameStop() {
    console.log('Game Stop');
  }

}
