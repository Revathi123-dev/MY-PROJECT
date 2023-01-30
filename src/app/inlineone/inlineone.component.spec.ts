import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineoneComponent } from './inlineone.component';

describe('InlineoneComponent', () => {
  let component: InlineoneComponent;
  let fixture: ComponentFixture<InlineoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
