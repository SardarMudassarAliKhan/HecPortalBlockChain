import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPendingComponent } from './search-pending.component';

describe('SearchPendingComponent', () => {
  let component: SearchPendingComponent;
  let fixture: ComponentFixture<SearchPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
