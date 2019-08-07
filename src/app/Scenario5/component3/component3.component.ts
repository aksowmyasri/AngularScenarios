import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'scenario5-component3',
  templateUrl: './component3.component.html',
  styleUrls: []
})
export class Scenario5Component3 implements OnInit {
 public data="";
 @Output() public childEvent = new EventEmitter();
 constructor() { }

 ngOnInit() {
 }
 fireEvent() {
   this.childEvent.emit(this.data);
 }
}
