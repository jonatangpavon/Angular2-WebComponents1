import {Component} from '@angular/core'
import {HelloWorldComponent} from './helloworld/hello-world.component'
import {DirectivesExamplesComponent} from './DirectivesExamplesComponent'
@Component({
  selector: 'ng2-app',
  template: `<ng2-hello-world></ng2-hello-world>
  <directive-example></directive-example>`,
  directives: [HelloWorldComponent, DirectivesExamplesComponent]
})

export class AppComponent{

  constructor(){
  }

}
