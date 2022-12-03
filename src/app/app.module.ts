import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FiltersComponent } from './filters/filters.component';
import { FilterFormComponent } from './filter-form/filter-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    FilterFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
