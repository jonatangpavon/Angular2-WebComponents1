import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'directive-example',
  styles:[
    `.odd{
        background-color: green
    }
    .even{
      background-color:blue
    }
    .last{
      background-color:orange
    }
    .content{
      background-color: brown
    }
    `

  ],
  template: `<div *ngIf="show" [class.content]="show">
<ul>
  <li [ngStyle]="{color: color,\'font-size\':defaultSize}"
    [ngClass]="{odd: o, even:e, last:l}"
   *ngFor="#color of colors; #i=index; #o=odd; #e=even; #l=last">{{i}} - {{color}}
    <span [ngSwitch] = "color">
      <p *ngSwitchWhen="'grey'">I am grey</p>
      <p [style.fontSize] = "color == 'red' ? '100px' : '50px'" *ngSwitchDefault> I am other color </p>
    </span>
   </li>
</ul>
  <p>Directives example</p>
  </div>`

})

export class DirectivesExamplesComponent implements OnInit{
 show:boolean
 colors: string[]
 defaultSize:string

 ngOnInit(){
   this.show = true;
   this.colors=['red','blue', 'yellow', 'grey', 'black']
   this.defaultSize = '20px'
 }
}
