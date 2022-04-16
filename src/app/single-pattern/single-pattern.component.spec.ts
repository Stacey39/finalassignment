import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePatternComponent } from './single-pattern.component';

describe('SinglePatternComponent', () => {
  let component: SinglePatternComponent;
  let fixture: ComponentFixture<SinglePatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePatternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
