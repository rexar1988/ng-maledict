import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineScalePartyComponent } from './line-scale-party.component';

describe('LineScalePartyComponent', () => {
  let component: LineScalePartyComponent;
  let fixture: ComponentFixture<LineScalePartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineScalePartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineScalePartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
