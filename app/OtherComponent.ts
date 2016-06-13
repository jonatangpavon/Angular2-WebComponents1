import {Component, OnInit, Inject} from '@angular/core'
import {Routes, ROUTER_DIRECTIVES, RouteSegment} from '@angular/router'

@Component({
  selector: 'other',
  template: `<p>This is other component {{info}}</p>

`
})

export class OtherComponent implements OnInit {
  info:any
  contructor(@Inject(RouteSegment) private routeSegment:RouteSegmen ngOnInit()){
    this.info = this.routeSegment.getParam("info")
  }
}
