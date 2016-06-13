import { Component, Inject,OnInit } from '@angular/core'

import { HelloWorldService } from './hello-world.service'
import {HighlightDirective} from '../HighlightDirective'
import {DecoratorPipe} from '../DecoratorPipe'

@Component({
  selector: 'ng2-hello-world',
  providers: [HelloWorldService],
  template: `<h1 highlight id="hello">{{hello | uppercase}}</h1>
              <p>{{today | date:'medium'}}</p>
              <p>{{num | currency: 'EUR':true}}</p>
              <p>{{ 'prueba' | decorator: '***' }}
  `,
  directives: [HighlightDirective],
  pipes: [DecoratorPipe]

})

export class HelloWorldComponent implements OnInit{
  hello: string
  today: Date = new Date()
  num: number = 23.5
  constructor(private helloWorldService:HelloWorldService,
    @Inject('config') private config){
  }

  ngOnInit(){
    this.hello = this.helloWorldService.getHello() + " " +this.config.api
  }

}
