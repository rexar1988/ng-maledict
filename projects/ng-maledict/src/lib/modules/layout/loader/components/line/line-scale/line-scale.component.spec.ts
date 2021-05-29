import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineScaleComponent } from './line-scale.component';

describe('SpinnerAComponent', () => {
  let component: LineScaleComponent;
  let fixture: ComponentFixture<LineScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineScaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
