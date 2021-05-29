import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallPulseComponent } from './ball-pulse.component';

describe('BallPulseComponent', () => {
  let component: BallPulseComponent;
  let fixture: ComponentFixture<BallPulseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallPulseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallPulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
