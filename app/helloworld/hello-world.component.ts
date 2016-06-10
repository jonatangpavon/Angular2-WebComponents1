import { Component, OnInit } from '@angular/core'

import { HelloWorldService } from './hello-world.service'
import {HighlightDirective} from '../HighlightDirective'

@Component({
  selector: 'ng2-hello-world',
  providers: [HelloWorldService],
  template: `<h1 highlight id="hello">{{hello}}</h1>`,
  directives: [HighlightDirective]
})

export class HelloWorldComponent implements OnInit{
  hello: string

  constructor(private helloWorldService:HelloWorldService){
  }

  ngOnInit(){
    this.hello = this.helloWorldService.getHello()
  }

}
