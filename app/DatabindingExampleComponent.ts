import {Component, OnInit} from '@angular/core'
import {ChildComponent} from './ChildComponent'

@Component({
  selector: 'databinding-example',
  template: `<p>{{myName}}</p>
        <!--      <p [textContent]="myName"></p> -->
              <button (click)="onClick()">Click</button>
              <input type="text" [(ngModel)]="twoway">
              <p>{{twoway}} </p>
              <child (created) = "onCreated($event)" [name] = "myName"></child>
              <div *ngIf=msg>
                {{msg}}
              </div>
  `,
  host:{
    '(click)':'onClickHost()'
  },
  directives: [ChildComponent]
})

export class DatabindingExampleComponent implements OnInit{
  myName:string
  twoway:string
  msg:string
  ngOnInit(){
    this.myName = 'Jonatan'
  }

  onClick(){
    console.log('Clicked button')

  }

  onClickHost(){
    console.log('Clicked host')
  }

  onCreated(event){
    this.msg = event
  }
}
