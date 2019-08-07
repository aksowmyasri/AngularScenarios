import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'scenario4-component2',
  templateUrl: './component2.component.html',
  styleUrls: []
})
export class Scenario4Component2 implements OnInit {

  public data = "";
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireEvent() {
    this.childEvent.emit(this.data);
  }


}
