import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallScaleComponent } from './ball-scale.component';

describe('BallScaleComponent', () => {
  let component: BallScaleComponent;
  let fixture: ComponentFixture<BallScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallScaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
