import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr'
})
export class UsdInrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    const x = args[0]
    // console.log(args, "arg");
    // console.log(x);
    
    return value*x;
  }

}
