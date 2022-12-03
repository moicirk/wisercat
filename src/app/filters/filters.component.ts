import {Component, OnInit} from '@angular/core';
import { Filter } from '../filter';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  filters: Filter[] = [];

  selectedFilter?: Filter;

  constructor(private filterService: FilterService) {}

  ngOnInit() : void{
    this.getFilters();
  }

  createFilter(): void {
    this.selectedFilter = new Filter(null, 'My filter', 1, []);
  }

  selectFilter(filter: Filter): void {
    this.selectedFilter = filter;
  }

  getFilters(): void {
    this.filterService.getFilters()
      .subscribe(filters => this.filters = filters);
  }
}
