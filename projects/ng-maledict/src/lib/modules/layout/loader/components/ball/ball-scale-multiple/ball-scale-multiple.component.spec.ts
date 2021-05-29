import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallScaleMultipleComponent } from './ball-scale-multiple.component';

describe('BallScaleMultipleComponent', () => {
  let component: BallScaleMultipleComponent;
  let fixture: ComponentFixture<BallScaleMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallScaleMultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallScaleMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
