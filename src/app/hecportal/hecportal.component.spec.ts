import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HECPortalComponent } from './hecportal.component';

describe('HECPortalComponent', () => {
  let component: HECPortalComponent;
  let fixture: ComponentFixture<HECPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HECPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HECPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
