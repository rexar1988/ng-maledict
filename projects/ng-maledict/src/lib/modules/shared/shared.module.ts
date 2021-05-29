import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostDirective } from '../../directives/host/host.directive';

@NgModule({
  declarations: [
    HostDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HostDirective
  ],
})
export class SharedModule { }
