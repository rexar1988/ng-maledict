import { Component, Input, OnInit } from '@angular/core';
import { DialogRef } from '../../../../../../../ng-maledict/src/lib/modules/m-dialog/shared/classes/dialog-ref';

@Component({
  selector: 'app-popup-test',
  templateUrl: './popup-test.component.html',
  styleUrls: ['./popup-test.component.scss']
})
export class PopupTestComponent implements OnInit {
  @Input() lastName = 'lubchenko';

  constructor(public dialog: DialogRef) { }

  ngOnInit(): void {
    setInterval(() => {
      console.log(1);
    }, 1000);

    // console.log(this.dialog);
  }

}
