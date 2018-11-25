import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `{{course.money | currency : 'INR':true:'0.1-2' }}`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  course = {
    money : 5.324
    
  }
}
