import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityDashBoardComponent } from './university-dash-board.component';

describe('UniversityDashBoardComponent', () => {
  let component: UniversityDashBoardComponent;
  let fixture: ComponentFixture<UniversityDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityDashBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
