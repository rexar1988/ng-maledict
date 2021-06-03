import {
  ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Inject, Injectable, Injector, Renderer2,
  RendererFactory2, Type
} from '@angular/core';
import { MDialogModule } from '../../m-dialog.module';
import { DOCUMENT } from '@angular/common';
import { DialogConfig } from '../../shared/interfaces/dialog-config.interface';
import { MDialogComponent } from '../../components/m-dialog/m-dialog.component';

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

  open<T>(componentType: Type<any>, dialogConfig?: any) { //todo
    this.attachComponentToBody<T>(dialogConfig);
  }

  private attachComponentToBody<T>(dialogConfig?: DialogConfig): void {
    const componentRef: ComponentRef<T> = this.componentFactoryResolver
      .resolveComponentFactory<any>(MDialogComponent)
      .create(this.injector); // ??? injector

    if (dialogConfig && typeof componentRef.instance === 'object') {
      Object.assign(componentRef.instance, { data: dialogConfig });
    }

    this.applicationRef.attachView(componentRef.hostView);

    const componentElem = (componentRef.hostView as EmbeddedViewRef<T>).rootNodes[0] as HTMLElement;
    this.renderer.appendChild(this.document.body, componentElem);
  }

  private detachComponentFromBody<T>(componentRef: ComponentRef<T>): void {
    this.applicationRef.detachView(componentRef.hostView);
    componentRef.destroy();
  }
}
