import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogRoutingModule } from './dialog-routing.module';
import { DialogComponent } from './components/dialog/dialog.component';
import { PopupTestComponent } from './components/popup-test/popup-test.component';
import { MDialogModule } from 'ng-maledict';

@NgModule({
  declarations: [
    DialogComponent,
    PopupTestComponent
  ],
  imports: [
    CommonModule,
    DialogRoutingModule,
    MDialogModule,
  ]
})
export class DialogModule { }
