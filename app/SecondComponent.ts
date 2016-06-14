import {Component, OnInit} from '@angular/core'
import {RouteSegment,Router, Routes, ROUTER_DIRECTIVES} from '@angular/router'

@Component({
  selector: 'second',
  template: `<p>Second </p>
`,
  directives: [ROUTER_DIRECTIVES]
})

export class SecondComponent implements OnInit{
  contructor(){}

  ngOnInit(){

  }

}
