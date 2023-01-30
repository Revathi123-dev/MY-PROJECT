import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesreportComponent } from './categoriesreport.component';

describe('CategoriesreportComponent', () => {
  let component: CategoriesreportComponent;
  let fixture: ComponentFixture<CategoriesreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
