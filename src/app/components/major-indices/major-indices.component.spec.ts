import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorIndicesComponent } from './major-indices.component';

describe('MajorIndicesComponent', () => {
  let component: MajorIndicesComponent;
  let fixture: ComponentFixture<MajorIndicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MajorIndicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MajorIndicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
