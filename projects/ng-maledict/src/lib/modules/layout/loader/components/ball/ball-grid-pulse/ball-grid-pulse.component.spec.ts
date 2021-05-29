import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallGridPulseComponent } from './ball-grid-pulse.component';

describe('BallGridPulseComponent', () => {
  let component: BallGridPulseComponent;
  let fixture: ComponentFixture<BallGridPulseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallGridPulseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallGridPulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
