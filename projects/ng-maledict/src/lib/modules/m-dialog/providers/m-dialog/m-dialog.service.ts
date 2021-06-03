import {
  ApplicationRef,
  ComponentFactoryResolver, ComponentRef,
  EmbeddedViewRef, Inject,
  Injectable,
  Injector, Renderer2, RendererFactory2,
  Type
} from '@angular/core';
import { MDialogModule } from '../../m-dialog.module';
import { DialogInjector } from '../../../../injectors/dialog.injector';
import { DOCUMENT } from '@angular/common';
import { DialogRef } from '../../shared/classes/dialog-ref';

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

  open<T>(component: Type<any>, componentProps: object | null = null) {
    const componentRef: ComponentRef<T> = this.componentFactoryResolver
      .resolveComponentFactory<any>(component)
      .create(this.injector); // ??? injector

    if (componentProps && typeof componentRef.instance === 'object') {
      Object.assign(componentRef.instance, { data: componentProps });
    }

    console.log(componentRef);

    this.attachComponentToBody<T>(componentRef);

    const dialogRef = new DialogRef();
    console.log(dialogRef);


    //
    return componentRef.instance;
  }

  private attachComponentToBody<T>(componentRef: ComponentRef<T>): void {
    this.applicationRef.attachView(componentRef.hostView);

    const componentElem = (componentRef.hostView as EmbeddedViewRef<T>).rootNodes[0] as HTMLElement;
    this.renderer.appendChild(this.document.body, componentElem);
  }

  private detachComponentFromBody<T>(componentRef: ComponentRef<T>): void {
    this.applicationRef.detachView(componentRef.hostView);
    componentRef.destroy();
  }
}
