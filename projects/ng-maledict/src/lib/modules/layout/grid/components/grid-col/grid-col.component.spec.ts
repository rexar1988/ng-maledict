import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GColComponent } from 'projects/maledict-ui/src/modules/grid/components/grid-col/grid-col.component';

describe('GColComponent', () => {
  let component: GColComponent;
  let fixture: ComponentFixture<GColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GColComponent,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
