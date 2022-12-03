import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Filter } from './filter';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private filterUrl = 'api/filter';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getFilters(): Observable<Filter[]> {
    return this.http.get<Filter[]>(this.filterUrl);
  }

  createFilter(filter: Filter): Observable<Filter> {
    return this.http.post<Filter>(this.filterUrl, filter);
  }

  updateFilter(filter: Filter): Observable<Filter> {
    return this.http.put<Filter>(this.filterUrl, filter);
  }
}
