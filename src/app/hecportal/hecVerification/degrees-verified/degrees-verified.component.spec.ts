import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreesVerifiedComponent } from './degrees-verified.component';

describe('DegreesVerifiedComponent', () => {
  let component: DegreesVerifiedComponent;
  let fixture: ComponentFixture<DegreesVerifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegreesVerifiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreesVerifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
