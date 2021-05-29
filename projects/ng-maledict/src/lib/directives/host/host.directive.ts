import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[mHost]'
})
export class HostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
