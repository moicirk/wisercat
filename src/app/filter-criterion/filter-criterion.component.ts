import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Criteria } from "../criteria";

@Component({
  selector: 'app-filter-criterion',
  templateUrl: './filter-criterion.component.html',
  styleUrls: ['./filter-criterion.component.scss']
})
export class FilterCriterionComponent {
  @Input() criterion!: Criteria;
  @Output() updateCriterion = new EventEmitter<Criteria>();

  sign = 'number';
  types = [
    { id: 'amount', name: 'Amount' },
    { id: 'title', name: 'Title' },
    { id: 'date', name: 'Date' },
  ];
  operators = [
    { id: 'equals', name: 'Equals' },
    { id: 'less', name: 'Less' },
    { id: 'more', name: 'More' },
  ];

  ngOnInit(): void {}

  onSelectType(type: string): void {
    this.onSelectSign(type);
    this.onSelectOperators();

    this.criterion.type = type;
    this.criterion.operator = this.operators[0].id;
    this.criterion.value = 'Meow';

    if (this.sign === 'number') {
      this.criterion.value = '1';
    }

    if (this.sign === 'date') {
      this.criterion.value = '2022-10-25';
    }
  }

  onSelectSign(type: string) {
    if (type === 'date') {
      this.sign = 'date';
    } else if (type === 'title') {
      this.sign = 'string';
    } else {
      this.sign = 'number';
    }
  }

  onSelectOperators(): void {
    if (this.sign === 'number') {
      this.operators = [
        { id: 'equals', name: 'Equals' },
        { id: 'less', name: 'Less' },
        { id: 'more', name: 'More' },
      ];
    }

    if (this.sign === 'string') {
      this.operators = [
        { name: 'Start with', id: 'start' },
        { name: 'End with', id: 'end' },
        { name: 'Equals', id: 'equals' },
      ];
    }

    if (this.sign === 'date') {
      this.operators = [
        { name: 'From', id: 'from' },
        { name: 'To', id: 'to' },
      ];
    }
  }
}
