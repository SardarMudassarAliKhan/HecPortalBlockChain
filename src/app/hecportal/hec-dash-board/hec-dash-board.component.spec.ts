import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HecDashBoardComponent } from './hec-dash-board.component';

describe('HecDashBoardComponent', () => {
  let component: HecDashBoardComponent;
  let fixture: ComponentFixture<HecDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HecDashBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HecDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
