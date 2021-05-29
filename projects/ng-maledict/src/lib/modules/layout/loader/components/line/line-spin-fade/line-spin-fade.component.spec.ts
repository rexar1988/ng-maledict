import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineSpinFadeComponent } from './line-spin-fade.component';

describe('LineSpinFadeLoaderComponent', () => {
  let component: LineSpinFadeComponent;
  let fixture: ComponentFixture<LineSpinFadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineSpinFadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineSpinFadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
