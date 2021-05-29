import { AfterContentInit, Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { GridColComponent } from '../grid-col/grid-col.component';
import { AlignType } from '../../../../../types/align.type';

@Component({
  selector: 'm-grid-row',
  templateUrl: './grid-row.component.html',
  styleUrls: ['./grid-row.component.scss'],
})
export class GridRowComponent implements AfterContentInit {
  @Input() classes: string[] = [];
  @Input() alignRow: AlignType | undefined;
  @Input() styles: { [key: string]: string } = {};
  @ContentChildren(GridColComponent) readonly gColComponents: QueryList<GridColComponent> | undefined;
  @HostBinding('class.grid-row') defaultClasses = true;
  readonly cellCount = 12;
  gridTemplate = 'auto';

  ngAfterContentInit(): void {
    this.initGrid();

    if (this.alignRow) {
      this.styles.alignItems = this.alignRow;
    }
  }

  initGrid(): void {
    const gridValues = this.gColComponents?.map((gColComponent: GridColComponent) => {
      const cellWidth = (100 / this.cellCount) * +gColComponent.cols + '%';
      const isNumber = Number.isInteger(+gColComponent.cols);

      return (isNumber) ? cellWidth : `${gColComponent.cols}`;
    });

    if (gridValues) {
      this.gridTemplate = gridValues?.join(' ');
    }

    this.styles.gridTemplateColumns = this.gridTemplate;
  }
}
