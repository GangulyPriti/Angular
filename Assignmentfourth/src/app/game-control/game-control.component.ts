import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('GameStart') incrementedNumber = new EventEmitter<{numberValue: any}>();
  interval;
  i=0;
  constructor() { }

  ngOnInit() {}
  onGameStart() {
    console.log('Game start');
    this.interval =  setInterval(()=>{
      this.i++;
      this.incrementedNumber.emit({numberValue : this.i})
    },1000);
  }
  onGameStop() {
    console.log('Game Stop');
    if (this.interval) {
    clearInterval(this.interval);
    }
  }

}
