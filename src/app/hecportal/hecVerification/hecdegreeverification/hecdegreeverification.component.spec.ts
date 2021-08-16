import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HecdegreeverificationComponent } from './hecdegreeverification.component';

describe('HecdegreeverificationComponent', () => {
  let component: HecdegreeverificationComponent;
  let fixture: ComponentFixture<HecdegreeverificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HecdegreeverificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HecdegreeverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
