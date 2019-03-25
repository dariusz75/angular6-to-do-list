import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capital'
})
export class CapitalPipe implements PipeTransform {

  transform(value: string, args?: string): any {
    // tslint:disable-next-line:no-unused-expression
    return value.charAt(0).toUpperCase() + value.slice(1) + args;
  }

}
