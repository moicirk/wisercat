import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Filter } from './filter';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private filterUrl = 'api/filter';

  constructor(private http: HttpClient) {}

  getFilters(): Observable<Filter[]> {
    return this.http.get<Filter[]>(this.filterUrl);
  }

  createFilter(filter: Filter): Observable<Filter> {
    return this.http.post<Filter>(this.filterUrl, filter);
  }

  updateFilter(filter: Filter): Observable<Filter> {
    return this.http.put<Filter>(this.filterUrl + '/' + filter.id, filter);
  }

  deleteFilter(filter: Filter): Observable<Filter> {
    return this.http.delete<Filter>(this.filterUrl + '/' + filter.id);
  }
}
