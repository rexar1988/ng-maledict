import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderModule } from 'ng-maledict';

import { LoadersRoutingModule } from './loaders-routing.module';
import { LoadersComponent } from './components/loaders/loaders.component';

@NgModule({
  declarations: [
    LoadersComponent
  ],
  imports: [
    CommonModule,
    LoadersRoutingModule,
    LoaderModule,
  ]
})
export class LoadersModule { }
