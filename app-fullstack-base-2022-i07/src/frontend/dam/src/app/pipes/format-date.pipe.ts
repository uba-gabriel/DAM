import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: any): any {
    const formateo = new DatePipe('en-US');
    return formateo.transform(value, 'dd-MM-yy HH:mm:ss');
  }

}

