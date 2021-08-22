import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InprocessStudentsComponent } from './inprocess-students.component';

describe('InprocessStudentsComponent', () => {
  let component: InprocessStudentsComponent;
  let fixture: ComponentFixture<InprocessStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InprocessStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InprocessStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
