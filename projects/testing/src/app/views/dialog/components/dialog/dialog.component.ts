import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MDialogService } from 'ng-maledict';
import { PopupTestComponent } from '../popup-test/popup-test.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @ViewChild('dialog', { read: ViewContainerRef, static: true, }) dialog: ViewContainerRef | undefined;

  constructor(
    private readonly mDialog: MDialogService,
  ) { }

  ngOnInit(): void {
    this.mDialog.open(PopupTestComponent, { lastName: 'lubchenko' });
  }
}
