import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsreportComponent } from './productsreport.component';

describe('ProductsreportComponent', () => {
  let component: ProductsreportComponent;
  let fixture: ComponentFixture<ProductsreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
