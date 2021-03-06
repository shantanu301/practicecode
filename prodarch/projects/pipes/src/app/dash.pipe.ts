import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dash'
})
export class DashPipe implements PipeTransform {

  transform(value: string, pos: number): string {
   let part1 = value.substring(0,pos)
   let part2 = value.substring(pos,value.length)
    return `${part1}-${part2}`;
  }

}
