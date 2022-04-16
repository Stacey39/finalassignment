import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPresentationalPatternComponent } from './container-presentational-pattern.component';

describe('ContainerPresentationalPatternComponent', () => {
  let component: ContainerPresentationalPatternComponent;
  let fixture: ComponentFixture<ContainerPresentationalPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerPresentationalPatternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerPresentationalPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
