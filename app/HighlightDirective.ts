import {Directive, ElementRef, Renderer, Inject}  from '@angular/core'

@Directive({
  selector:'[highlight]',
  host:{
    '(mouseenter)':'onMouseEnter()',
    '(mouseleave)':'onMouseLeave()'
  }
})

export class HighlightDirective {
  constructor(@Inject(ElementRef) private el:ElementRef,
  @Inject(Renderer) private renderer: Renderer) {}

private _highlight(color: string){
  this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
}
onMouseEnter(){
  this._highlight('yellow')
}

onMouseLeave(){
  this._highlight(null)
}
}
