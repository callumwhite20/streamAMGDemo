import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  public niceDate(date:string, time:string = ''): string {
    let timeFormat = ' - ha';

    if (time !== '' && time.split(':')[1] !== '00') {
      timeFormat = ' - h:mma';
    } else if (time === '') {
      timeFormat = '';
    }

    return moment(date + ' ' + time).format('dddd, MMMM DD YYYY' + timeFormat);
  }
}
