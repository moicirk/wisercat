import { Component, Input } from '@angular/core';
import { Filter } from '../filter';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent {
  @Input() filter?: Filter;

  submitted = false;

  constructor(private filterService: FilterService) {}

  resetFilter (): void {

  }

  saveFilter(): void {
    this.submitted = true;

    if (this.filter) {
      this.filterService.updateFilter(this.filter)
        .subscribe(() => console.log('Helllo'));
    }
  }

  onSubmit(): void {

  }
}
