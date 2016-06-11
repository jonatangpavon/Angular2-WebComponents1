import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
  name: 'decorator',
  pure: true
})

export class DecoratorPipe implements PipeTransform{
  transform(value:string, args: any[]):string{
    let dec = args[0]
    return dec + value +dec

  }


}
