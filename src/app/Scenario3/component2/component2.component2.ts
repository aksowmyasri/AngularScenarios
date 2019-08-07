import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'scenario3-component2',
  templateUrl: './component2.component.html',
  styleUrls: []
})
export class Scenario3Component2 implements OnInit {

  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }

}
