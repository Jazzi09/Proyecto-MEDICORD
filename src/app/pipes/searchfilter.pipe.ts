import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: any, campo: string, args:string): any {

    if (!value) return null;
    if (!args) return value;

    return value.filter((paciente: { [x: string]: string; }) =>
      paciente[campo].toLowerCase().includes(args.toLowerCase())
      );
    }
  }

