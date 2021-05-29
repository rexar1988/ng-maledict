import { Component, ComponentFactory, ComponentFactoryResolver, Input, OnInit, Type, ViewChild } from '@angular/core';
import { HostDirective } from '../../../../../directives/host/host.directive';
import { SpinnerInterface } from '../../../../../interfaces/spinner.interface';

import { SpinnerType } from '../../shared/types/spinner.type';

import { BallGridPulseComponent } from '../ball/ball-grid-pulse/ball-grid-pulse.component';
import { BallPulseComponent } from '../ball/ball-pulse/ball-pulse.component';
import { BallScaleComponent } from '../ball/ball-scale/ball-scale.component';
import { BallScaleMultipleComponent } from '../ball/ball-scale-multiple/ball-scale-multiple.component';
import { CircleRotateComponent } from '../circle/circle-rotate/circle-rotate.component';
import { CircleRotatePulseComponent } from '../circle/circle-rotate-pulse/circle-rotate-pulse.component';
import { CircleRotateMultipleComponent } from '../circle/circle-rotate-multiple/circle-rotate-multiple.component';
import { LineScaleComponent } from '../line/line-scale/line-scale.component';
import { LineScalePartyComponent } from '../line/line-scale-party/line-scale-party.component';
import { LineScalePulseOutComponent } from '../line/line-scale-pulse-out/line-scale-pulse-out.component';
import { LineScalePulseOutRapidComponent } from '../line/line-scale-pulse-out-rapid/line-scale-pulse-out-rapid.component';
import { LineSpinFadeComponent } from '../line/line-spin-fade/line-spin-fade.component';
import { BallScaleRippleComponent } from '../ball/ball-scale-ripple/ball-scale-ripple.component';
import { BallScaleRippleMultipleComponent } from '../ball/ball-scale-ripple-multiple/ball-scale-ripple-multiple.component';
import { BallRotateComponent } from '../ball/ball-rotate/ball-rotate.component';
import { BallGridBeatComponent } from '../ball/ball-grid-beat/ball-grid-beat.component';

@Component({
  selector: 'm-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() loading = true;
  @Input() showLoadingText = true;
  @Input() loadingText = 'Loading2...';
  @Input() spinnerName: SpinnerType = 'lineScale';
  @Input() speed: string | undefined;
  @Input() set size(value: string) {
    this.fontSize = `${value}px`;
  };
  @ViewChild(HostDirective, { static: true }) spinnerHost!: HostDirective;
  spinnerComponents = new Map<string, Type<any>>([
    ['ballGridBeat', BallGridBeatComponent],
    ['ballGridPulse', BallGridPulseComponent],
    ['ballPulse', BallPulseComponent],
    ['ballRotate', BallRotateComponent],
    ['ballScale', BallScaleComponent],
    ['ballScaleMultiple', BallScaleMultipleComponent],
    ['ballScaleRippleMultiple', BallScaleRippleMultipleComponent],
    ['ballScaleRipple', BallScaleRippleComponent],
    ['circleRotate', CircleRotateComponent],
    ['circleRotatePulse', CircleRotatePulseComponent],
    ['circleRotateMultiple', CircleRotateMultipleComponent],
    ['lineScale', LineScaleComponent],
    ['lineScaleParty', LineScalePartyComponent],
    ['lineScalePulseOut', LineScalePulseOutComponent],
    ['lineScalePulseOutRapid', LineScalePulseOutRapidComponent],
    ['lineSpinFade', LineSpinFadeComponent],
  ]);
  fontSize = '14px';

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.loadSpinner();
  }

  private loadSpinner(): void {
    const componentFactory: ComponentFactory<any> = this.componentFactoryResolver
      .resolveComponentFactory(this.spinnerComponents.get(this.spinnerName)!);
    const componentRef = this.spinnerHost.viewContainerRef.createComponent<SpinnerInterface>(componentFactory);

    if (this.speed) {
      componentRef.instance.speed = this.speed;
    }
    componentRef.instance.showLoadingText = this.showLoadingText;
    componentRef.instance.loadingText = this.loadingText;
  }
}
