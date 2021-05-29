import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { GreedColsType } from '../../../../../types/greed-cols.type';

@Component({
  selector: 'm-grid-col',
  templateUrl: './grid-col.component.html',
  styleUrls: ['./grid-col.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GridColComponent {
  @Input() cols: GreedColsType = 'auto';
  @Input() classes: string[] = [];
  @HostBinding('class.grid-col') defaultClasses = true;
}
