import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallScaleRippleMultipleComponent } from './ball-scale-ripple-multiple.component';

describe('BallScaleRippleMultipleComponent', () => {
  let component: BallScaleRippleMultipleComponent;
  let fixture: ComponentFixture<BallScaleRippleMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallScaleRippleMultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallScaleRippleMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
