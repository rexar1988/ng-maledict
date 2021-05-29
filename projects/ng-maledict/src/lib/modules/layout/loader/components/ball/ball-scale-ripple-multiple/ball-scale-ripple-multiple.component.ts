import { Component, OnInit } from '@angular/core';
import { SpinnerInterface } from '../../../../../../interfaces/spinner.interface';

@Component({
  selector: 'm-ball-scale-ripple-multiple',
  templateUrl: './ball-scale-ripple-multiple.component.html',
  styleUrls: ['./ball-scale-ripple-multiple.component.scss']
})
export class BallScaleRippleMultipleComponent implements OnInit, SpinnerInterface {
  speed = '1s';
  loadingText = 'Loading...';
  showLoadingText = true;

  constructor() { }

  ngOnInit(): void {
  }

}
