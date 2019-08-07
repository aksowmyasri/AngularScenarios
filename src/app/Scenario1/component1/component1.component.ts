import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: []
})
export class Component1Component implements OnInit {

  public name="";
  constructor() { }

  ngOnInit() {
  }

  public console(event)
  {
    console.log(event);
  }
}
