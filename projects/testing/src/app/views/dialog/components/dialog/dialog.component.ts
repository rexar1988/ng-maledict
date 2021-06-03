import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PopupTestComponent } from '../popup-test/popup-test.component';
import { MDialogService } from 'ng-maledict';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @ViewChild('dialog', { read: ViewContainerRef, static: true, }) dialog: ViewContainerRef | undefined;

  constructor(
    private mDialog: MDialogService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.mDialog.open<PopupTestComponent>(PopupTestComponent, { name: 'denis' });
  }
}
