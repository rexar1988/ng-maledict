import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallRotateComponent } from './ball-rotate.component';

describe('BallRotateComponent', () => {
  let component: BallRotateComponent;
  let fixture: ComponentFixture<BallRotateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallRotateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallRotateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
