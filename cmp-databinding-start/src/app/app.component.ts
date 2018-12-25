import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'blueprint', name: 'TestServer', content: 'test the server!'}];

  onServerAdded(serverData: {serverName: string; serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  onBlueprintAdded(bluePrintData: {serverName: string; serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }
  onFirstChange(){
    this.serverElements[0].name = "Changed!!";
    console.log("ngfirst change", this.serverElements[0].name);
  }
  onDestryFirst(){
    this.serverElements.splice(0,1);
  }
}
