import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { SharedModule } from '../../shared/shared.module';
import { LineScaleComponent } from './components/line/line-scale/line-scale.component';
import { LineScalePartyComponent } from './components/line/line-scale-party/line-scale-party.component';
import { LineScalePulseOutComponent } from './components/line/line-scale-pulse-out/line-scale-pulse-out.component';
import { LineScalePulseOutRapidComponent } from './components/line/line-scale-pulse-out-rapid/line-scale-pulse-out-rapid.component';
import { BallPulseComponent } from './components/ball/ball-pulse/ball-pulse.component';
import { BallGridPulseComponent } from './components/ball/ball-grid-pulse/ball-grid-pulse.component';
import { LineSpinFadeComponent } from './components/line/line-spin-fade/line-spin-fade.component';
import { CircleRotateComponent } from './components/circle/circle-rotate/circle-rotate.component';
import { CircleRotatePulseComponent } from './components/circle/circle-rotate-pulse/circle-rotate-pulse.component';
import { CircleRotateMultipleComponent } from './components/circle/circle-rotate-multiple/circle-rotate-multiple.component';
import { BallScaleComponent } from './components/ball/ball-scale/ball-scale.component';
import { BallScaleMultipleComponent } from './components/ball/ball-scale-multiple/ball-scale-multiple.component';
import { BallScaleRippleComponent } from './components/ball/ball-scale-ripple/ball-scale-ripple.component';
import { BallScaleRippleMultipleComponent } from './components/ball/ball-scale-ripple-multiple/ball-scale-ripple-multiple.component';
import { BallRotateComponent } from './components/ball/ball-rotate/ball-rotate.component';
import { BallGridBeatComponent } from './components/ball/ball-grid-beat/ball-grid-beat.component';

@NgModule({
  declarations: [
    LoaderComponent,
    LineScalePulseOutComponent,
    LineScalePulseOutRapidComponent,
    LineScalePartyComponent,
    LineScaleComponent,
    BallPulseComponent,
    BallGridPulseComponent,
    LineSpinFadeComponent,
    CircleRotateComponent,
    CircleRotatePulseComponent,
    CircleRotateMultipleComponent,
    BallScaleComponent,
    BallScaleMultipleComponent,
    BallScaleRippleComponent,
    BallScaleRippleMultipleComponent,
    BallRotateComponent,
    BallGridBeatComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LoaderComponent
  ],
})
export class LoaderModule { }
