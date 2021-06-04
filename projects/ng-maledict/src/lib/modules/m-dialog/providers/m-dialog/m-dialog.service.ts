import {
  ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Inject, Injectable, Injector, Renderer2,
  RendererFactory2, Type
} from '@angular/core';
import { MDialogModule } from '../../m-dialog.module';
import { DOCUMENT } from '@angular/common';
import { DialogConfig } from '../../shared/interfaces/dialog-config.interface';
import { MDialogComponent } from '../../components/m-dialog/m-dialog.component';
import { DialogRef } from '../../shared/classes/dialog-ref';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: MDialogModule
})
export class MDialogService {
  private renderer: Renderer2 = this.rendererFactory.createRenderer(null, null);

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly applicationRef: ApplicationRef,
    private readonly injector: Injector,
    private readonly rendererFactory: RendererFactory2,
  ) { }

  open<T>(componentType: Type<any>, dialogConfig?: any): DialogRef {
    return this.attachDialogComponentToBody<T>(componentType, dialogConfig);
  }

  private attachDialogComponentToBody<T>(componentType: Type<T>, dialogConfig?: DialogConfig): DialogRef {
    const dialogRef = new DialogRef();
    const componentRef: ComponentRef<MDialogComponent> = this.componentFactoryResolver
      .resolveComponentFactory<any>(MDialogComponent)
      .create(this.injector);

    if (dialogConfig && typeof componentRef.instance === 'object') {
      Object.assign(componentRef.instance, { data: dialogConfig });
    }

    this.applicationRef.attachView(componentRef.hostView);

    const componentElem = (componentRef.hostView as EmbeddedViewRef<T>).rootNodes[0] as HTMLElement;
    this.renderer.appendChild(this.document.body, componentElem);

    componentRef.instance.onClose$
      .pipe(take(1))
      .subscribe((data: unknown) => {
        this.detachDialogComponentFromBody(componentRef);
      });

    componentRef.instance.childComponentType = componentType;

    return dialogRef;
  }

  private detachDialogComponentFromBody<T>(componentRef: ComponentRef<T>): void {
    this.applicationRef.detachView(componentRef.hostView);
    componentRef.destroy();
  }
}
