import { Component, Inject,OnInit} from '@angular/core'
import {Routes, Router} from '@angular/router'
import { HelloWorldService } from './hello-world.service'
import {HighlightDirective} from '../HighlightDirective'
import {DecoratorPipe} from '../DecoratorPipe'

@Component({
  selector: 'helloworld',
  providers: [HelloWorldService],
  template: `<button (click)="goToOther()">Go to Other</button>
  `,
  directives: [HighlightDirective],
  pipes: [DecoratorPipe]

})

export class HelloWorldComponent implements OnInit{
  hello: string
  today: Date = new Date()
  num: number = 23.5
  constructor(private helloWorldService:HelloWorldService,
    @Inject(Router) private router:Router,
    @Inject('config') private config){
  }

  ngOnInit(){
    this.hello = this.helloWorldService.getHello() + " " +this.config.api
  }

  goToOther(){
    this.router.navigate(['/other','from', 'hello'])
  }

}
