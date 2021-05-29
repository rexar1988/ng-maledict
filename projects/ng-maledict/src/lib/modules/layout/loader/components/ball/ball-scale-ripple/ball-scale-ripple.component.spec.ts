import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallScaleRippleComponent } from './ball-scale-ripple.component';

describe('BallScaleRippleComponent', () => {
  let component: BallScaleRippleComponent;
  let fixture: ComponentFixture<BallScaleRippleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallScaleRippleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallScaleRippleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
