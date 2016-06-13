import {Component} from '@angular/core'
import {HelloWorldComponent} from './helloworld/hello-world.component'
import {DirectivesExamplesComponent} from './DirectivesExamplesComponent'
import {Routes, ROUTER_DIRECTIVES, RouteSegment} from '@angular/router'
import {OtherComponent} from './OtherComponent'
@Routes([
  { path: './helloworld',  component: HelloWorldComponent},
  { path: './other/:info', component: OtherComponent}
])

@Component({
  selector: 'ng2-app',
  template: `<p>App Component</p>
    <a [routerLink]="['HelloWorldComponent']">Hello World</a>
    <div>
      <router-outlet></router-outlet>
    </div>
    `,
  directives: [HelloWorldComponent, ROUTER_DIRECTIVES]
})

export class AppComponent{

  constructor(){
  }

}
