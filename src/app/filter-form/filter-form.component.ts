import {Component, Input } from '@angular/core';
import { Filter } from '../filter';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent {
  @Input() filter!: Filter;

  constructor() {}

  modalDismiss(): void {}

  addCriterionRow(): void {
    this.filter.criteria.push({
      type: 'amount',
      operator: 'more',
      value: '1'
    });
  }

  onSelectionChanged(value: string): void {
    this.filter.selection = parseInt(value);
  }

  onSubmit(): void {}
}
