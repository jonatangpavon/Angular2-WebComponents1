import {Component} from '@angular/core'
import {HelloWorldComponent} from './helloworld/hello-world.component'
import {DirectivesExamplesComponent} from './DirectivesExamplesComponent'
import {Routes,ROUTER_DIRECTIVES} from '@angular/router'
import {OtherComponent} from './OtherComponent'

@Component({
  selector: 'ng2-app',
  template: `<p>App Component</p>
  <nav>
    <a [routerLink]="['/hello']">Hello</a>
    <a [routerLink]="['/other/Jonatan/Garcia']">Other</a>
  </nav>
    <div>
      <router-outlet></router-outlet>
    </div>
    `,
  directives: [ROUTER_DIRECTIVES]
})


@Routes([
  { path: '/hello',  component: HelloWorldComponent},
  { path: '/other/:param1/:param2', component: OtherComponent}
])

export class AppComponent{

  constructor(){
  }

}
