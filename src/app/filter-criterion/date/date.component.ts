import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  @Input() value!: string;
  @Output() setItem = new EventEmitter<string>();

  dates: number[] = this.counter(1, 31);
  date: number = 0;

  months: number[] = this.counter(1, 12);
  month: number = 0;

  years: number[] = this.counter(1950, 2050);
  year: number = 0;

  ngOnInit() {
    const dateOfTime = moment.utc(this.value, 'YYYY-MM-DD');
    this.date = dateOfTime.date();
    this.month = dateOfTime.month() + 1;
    this.year = dateOfTime.year();
  }

  setDate(date: number) {
    this.date = date;
    this.setEndDate();
  }

  setMonth(month: number) {
    this.month = month;
    this.setEndDate();
  }

  setYear(year: number) {
    this.year = year;
    this.setEndDate();
  }

  private setEndDate(): void {
    const month = this.month > 9 ? this.month : '0' + this.month;
    const date = this.date > 9 ? this.date : '0' + this.date;
    this.setItem.emit(`${this.year}-${month}-${date}`);
  }

  private counter(start: number, end: number) {
    let results = [];
    while (start <= end) {
      results.push(start);
      ++start;
    }
    return results;
  }
}
