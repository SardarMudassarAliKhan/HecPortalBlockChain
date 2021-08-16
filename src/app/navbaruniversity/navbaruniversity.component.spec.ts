import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaruniversityComponent } from './navbaruniversity.component';

describe('NavbaruniversityComponent', () => {
  let component: NavbaruniversityComponent;
  let fixture: ComponentFixture<NavbaruniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbaruniversityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbaruniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
