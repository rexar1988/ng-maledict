import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallGridBeatComponent } from './ball-grid-beat.component';

describe('BallGridBeatComponent', () => {
  let component: BallGridBeatComponent;
  let fixture: ComponentFixture<BallGridBeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallGridBeatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallGridBeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
