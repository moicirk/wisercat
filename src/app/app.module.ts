import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FiltersComponent } from './filters/filters.component';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterCriterionComponent } from './filter-criterion/filter-criterion.component';
import { DateComponent } from './filter-criterion/date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    FilterFormComponent,
    FilterCriterionComponent,
    DateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
