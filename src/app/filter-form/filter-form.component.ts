import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Filter } from '../filter';
import { FilterService } from '../filter.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent {
  @Input() filter!: Filter;
  @Output() addFilter = new EventEmitter<Filter>();

  selections = [
    { id: 1, name: 'Select 1' },
    { id: 2, name: 'Select 2' },
    { id: 3, name: 'Select 3' },
  ];

  constructor(private filterService: FilterService,
              private activeModal: NgbActiveModal) {}

  modalDismiss(result?: string): void {
    this.activeModal.close(result);
  }

  addCriterionRow(): void {
    this.filter.criteria.push({
      type: 'amount',
      operator: 'equals',
      value: '1'
    });
  }

  onSelectionChanged(value: string): void {
    this.filter.selection = parseInt(value);
  }

  removeCriterionItem(index: number): void {
    this.filter.criteria.splice(index, 1);
  }

  onSubmit(): void {
    const serviceMethod = this.filter.id === null
      ? this.filterService.createFilter(this.filter)
      : this.filterService.updateFilter(this.filter);

    serviceMethod.subscribe((filter: Filter) => {
      this.addFilter.emit(filter);
      this.modalDismiss();
    });
  }
}
