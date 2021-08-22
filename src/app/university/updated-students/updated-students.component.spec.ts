import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedStudentsComponent } from './updated-students.component';

describe('UpdatedStudentsComponent', () => {
  let component: UpdatedStudentsComponent;
  let fixture: ComponentFixture<UpdatedStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
