import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineScalePulseOutRapidComponent } from './line-scale-pulse-out-rapid.component';

describe('LineScalePulseOutRapidComponent', () => {
  let component: LineScalePulseOutRapidComponent;
  let fixture: ComponentFixture<LineScalePulseOutRapidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineScalePulseOutRapidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineScalePulseOutRapidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
