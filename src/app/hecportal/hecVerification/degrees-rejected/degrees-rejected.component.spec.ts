import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreesRejectedComponent } from './degrees-rejected.component';

describe('DegreesRejectedComponent', () => {
  let component: DegreesRejectedComponent;
  let fixture: ComponentFixture<DegreesRejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegreesRejectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreesRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
