import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Criteria } from "../criteria";

@Component({
  selector: 'app-filter-criterion',
  templateUrl: './filter-criterion.component.html',
  styleUrls: ['./filter-criterion.component.scss']
})
export class FilterCriterionComponent implements OnInit {
  @Input() criterion!: Criteria;
  @Output() removeItem = new EventEmitter();

  sign: string = 'number';

  types = [
    { id: 'amount', name: 'Amount' },
    { id: 'title', name: 'Title' },
    { id: 'date', name: 'Date' },
  ];

  numberOperators = [
    { id: 'equals', name: 'Equals' },
    { id: 'less', name: 'Less' },
    { id: 'more', name: 'More' },
  ];

  stringOperators = [
    { name: 'Start with', id: 'start' },
    { name: 'End with', id: 'end' },
    { name: 'Equals', id: 'equals' },
  ];

  dateOperators = [
    { name: 'From', id: 'from' },
    { name: 'To', id: 'to' },
  ];

  ngOnInit(): void {
    this.onSelectSign();
  }

  onSelectSign(): void {
    const type = this.criterion.type;

    if (type === 'date') {
      this.sign = 'date';
    } else if (type === 'title') {
      this.sign = 'string';
    } else {
      this.sign = 'number';
    }
  }

  onSelectType(type: string): void {
    this.criterion.type = type;
    this.onSelectSign();

    let operators = this.numberOperators;
    this.criterion.value = '1';

    if (this.sign === 'string') {
      operators = this.stringOperators;
      this.criterion.value = 'Meow';
    }

    if (this.sign === 'date') {
      operators = this.dateOperators;
      this.criterion.value = '2022-10-25';
    }

    this.criterion.operator = operators[0].id;
  }

  setValue(value: string): void {
    this.criterion.value = value;
  }
}
