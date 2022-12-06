import {Component, OnInit, TemplateRef} from '@angular/core';
import { Filter } from '../filter';
import { FilterService } from '../filter.service';
import { FilterFormComponent } from '../filter-form/filter-form.component';
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

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

    ////TODO: delete this!
    this.createFilter();
  }

  createFilter(): void {
    this
      .openModal()
      .componentInstance
      .filter = new Filter(null, 'My filter', 1, []);
  }

  selectFilter(filter: Filter): void {
    this
      .openModal()
      .componentInstance
      .filter = filter;
  }

  getFilters(): void {
    this.filterService.getFilters()
      .subscribe(filters => this.filters = filters);
  }

  private openModal(): NgbModalRef {
    return this.modalService.open(FilterFormComponent, { size: this.modalSize });
  }
}
