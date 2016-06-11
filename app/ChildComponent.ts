import {Component,EventEmitter, Input, Output} from '@angular/core'


@Component({
  selector: 'child',

  template: `<p>This is the name: {{name}}</p>
        <button (click) = "create()"> Create</button>
`
})

export class ChildComponent {
  @Input()  name:string
  @Output() created = new EventEmitter()

  create(){
    console.log('Create')
    this.created.emit('Created '+ this.name)
  }
}
