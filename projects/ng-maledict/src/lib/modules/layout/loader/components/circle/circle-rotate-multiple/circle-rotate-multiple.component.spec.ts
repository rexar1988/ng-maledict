import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleRotateMultipleComponent } from './circle-rotate-multiple.component';

describe('CircleRotateMultipleComponent', () => {
  let component: CircleRotateMultipleComponent;
  let fixture: ComponentFixture<CircleRotateMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleRotateMultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleRotateMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
