import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDialogComponent } from './components/m-dialog/m-dialog.component';
import { MDialogService } from './providers/m-dialog/m-dialog.service';

@NgModule({
  declarations: [
    MDialogComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    // MDialogService,
  ],
})
export class MDialogModule { }
