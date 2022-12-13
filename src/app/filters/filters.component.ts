import { Component, OnInit } from '@angular/core';
import { Filter } from '../filter';
import { FilterService } from '../filter.service';
import { FilterFormComponent } from '../filter-form/filter-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  filters: Filter[] = [];

  private modalSize = 'xl';

  constructor(private filterService: FilterService,
              private modalService: NgbModal) {}

  ngOnInit() : void{
    this.getFilters();
  }

  getFilters(): void {
    this.filterService.getFilters().subscribe(filters => this.filters = filters);
  }

  createFilter(): void {
    this.openFormModal();
  }

  selectFilter(filter: Filter): void {
    this.openFormModal(filter);
  }

  deleteFilter(filter: Filter): void {
    if (!confirm('Are you sure?')) {
      return;
    }

    const filterIndex = this.filters.findIndex(f => f.id === filter.id);
    if (filterIndex > -1) {
      this.filterService.deleteFilter(filter)
        .subscribe(() => this.filters.splice(filterIndex, 1));
    }
  }

  private openFormModal(originalFilter?: Filter): void {
    const modalRef = this.modalService.open(FilterFormComponent, {
      size: this.modalSize,
      scrollable: true
    });

    modalRef.componentInstance.filter = originalFilter === undefined
      ? new Filter(null, 'My filter', 1, [{ type: 'amount', operator: 'equals', value: '4' }])
      : Filter.from(originalFilter);

    modalRef.componentInstance.updateFilter.subscribe((filter: Filter) => {
      if (originalFilter === undefined) {
        this.filters.push(filter);
      } else {
        const filterIndex = this.filters.findIndex(f => f.id === filter.id);
        this.filters[filterIndex] = filter;
      }
    });
  }
}
