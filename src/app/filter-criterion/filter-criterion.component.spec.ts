import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCriterionComponent } from './filter-criterion.component';

describe('FilterCriterionComponent', () => {
  let component: FilterCriterionComponent;
  let fixture: ComponentFixture<FilterCriterionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCriterionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterCriterionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
