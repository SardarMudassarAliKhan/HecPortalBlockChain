import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedStudentsComponent } from './verified-students.component';

describe('VerifiedStudentsComponent', () => {
  let component: VerifiedStudentsComponent;
  let fixture: ComponentFixture<VerifiedStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifiedStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiedStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
