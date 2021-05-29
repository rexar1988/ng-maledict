import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridRowComponent } from './components/grid-row/grid-row.component';
import { GridColComponent } from './components/grid-col/grid-col.component';

@NgModule({
  declarations: [
    GridRowComponent,
    GridColComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridRowComponent,
    GridColComponent,
  ],
})
export class GridModule { }
