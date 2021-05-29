import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleRotatePulseComponent } from './circle-rotate-pulse.component';

describe('CircleRotatePulseComponent', () => {
  let component: CircleRotatePulseComponent;
  let fixture: ComponentFixture<CircleRotatePulseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleRotatePulseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleRotatePulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
