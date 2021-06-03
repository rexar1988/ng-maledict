import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GRowComponent } from 'projects/maledict-ui/src/modules/grid/components/grid-row/grid-row.components';

describe('GRowComponent', () => {
  let component: GRowComponent;
  let fixture: ComponentFixture<GRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
