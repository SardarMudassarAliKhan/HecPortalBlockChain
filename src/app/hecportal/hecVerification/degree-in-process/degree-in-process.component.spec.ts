import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeInProcessComponent } from './degree-in-process.component';

describe('DegreeInProcessComponent', () => {
  let component: DegreeInProcessComponent;
  let fixture: ComponentFixture<DegreeInProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegreeInProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreeInProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
