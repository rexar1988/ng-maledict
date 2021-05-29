import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleRotateComponent } from './circle-rotate.component';

describe('CircleClipRotateComponent', () => {
  let component: CircleRotateComponent;
  let fixture: ComponentFixture<CircleRotateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleRotateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleRotateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
