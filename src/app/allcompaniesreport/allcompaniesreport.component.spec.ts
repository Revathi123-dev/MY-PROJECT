import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcompaniesreportComponent } from './allcompaniesreport.component';

describe('AllcompaniesreportComponent', () => {
  let component: AllcompaniesreportComponent;
  let fixture: ComponentFixture<AllcompaniesreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcompaniesreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllcompaniesreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
