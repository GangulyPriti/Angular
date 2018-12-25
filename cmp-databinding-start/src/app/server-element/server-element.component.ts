import {
  Component, Input, OnInit,
  ViewEncapsulation, OnChanges,
  SimpleChanges, DoCheck, OnDestroy, ViewChild, ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  @Input('srvElement') element: {type: string; name: string; content: string};
  @Input() name: string;
  @ViewChild('heading') heading: ElementRef;
  @ContentChild('contentParagraph') paragraph :ElementRef;
  constructor() {
    console.log("Constructor calling!!");

  }
  ngOnChanges(changes : SimpleChanges){
    console.log("NgOnChanges calling");
    console.log("changes ", changes);

  }
  ngOnInit() {
    console.log("ngOnInit calling");
    console.log('text content:' ,this.heading.nativeElement.textContent);
    console.log('paragraph content:' ,this.paragraph.nativeElement.textContent);
  }
  ngDoCheck(): void {
    console.log("NgDoChecked Calling!!");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInIt calling!!");
    console.log('paragraph content:' ,this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked(){
    console.log("NgAftercontentCheck Calling!!");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInIt calling!!");
    console.log('text content:' ,this.heading.nativeElement.textContent);
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewInIt Calling!!");
  }
  ngOnDestroy(): void {
    console.log("NGONDESTRY")
  }
}
