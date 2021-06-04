import { Component, ComponentFactoryResolver, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'm-dialog',
  templateUrl: './m-dialog.component.html',
  styleUrls: ['./m-dialog.component.scss']
})
export class MDialogComponent implements OnInit {
  onClose$ = new Subject<unknown>();
  childComponentType!: Type<any>;
  @ViewChild('dialogContainer', { read: ViewContainerRef, static: true }) dialogContainer: ViewContainerRef | null = null;

  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  ngOnInit(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.childComponentType);
    this.dialogContainer?.createComponent(componentFactory);

    console.log(componentFactory);
  }

  onClose(): void {
    this.onClose$.next(1);
  }
}
