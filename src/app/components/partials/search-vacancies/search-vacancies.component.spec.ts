import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVacanciesComponent } from './search-vacancies.component';

describe('SearchVacanciesComponent', () => {
  let component: SearchVacanciesComponent;
  let fixture: ComponentFixture<SearchVacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchVacanciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
