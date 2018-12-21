import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    @Output('srvCreated') serverCreated = new EventEmitter<{serverName: string; serverContent: string}>();
    @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string; serverContent: string}>();
    /*newServerContent = '';
    newServerName = '';*/
    @ViewChild('serverInputContent') serverInputContent: ElementRef;
        constructor() { }
        onAddServer(serverInputElement: HTMLInputElement) {
         this.serverCreated.emit(
            {serverName: serverInputElement.value
              , serverContent: this.serverInputContent.nativeElement.value
            });
        }
        onAddBlueprint(serverInputElement: HTMLInputElement) {
          this.bluePrintCreated.emit(
            {serverName: serverInputElement.value
              , serverContent: this.serverInputContent.nativeElement.value
            });
        }


  ngOnInit() {
  }
}
