import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreesInPendingComponent } from './degrees-in-pending.component';

describe('DegreesInPendingComponent', () => {
  let component: DegreesInPendingComponent;
  let fixture: ComponentFixture<DegreesInPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegreesInPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreesInPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
