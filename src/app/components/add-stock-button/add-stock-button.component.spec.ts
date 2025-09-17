import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStockButtonComponent } from './add-stock-button.component';

describe('AddStockButtonComponent', () => {
  let component: AddStockButtonComponent;
  let fixture: ComponentFixture<AddStockButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddStockButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStockButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
