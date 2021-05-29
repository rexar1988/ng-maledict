import { Component, OnInit } from '@angular/core';
import { SpinnerInterface } from '../../../../../../interfaces/spinner.interface';

@Component({
  selector: 'm-ball-scale-ripple',
  templateUrl: './ball-scale-ripple.component.html',
  styleUrls: ['./ball-scale-ripple.component.scss']
})
export class BallScaleRippleComponent implements OnInit, SpinnerInterface {
  speed = '1s';
  loadingText = 'Loading...';
  showLoadingText = true;

  constructor() { }

  ngOnInit(): void {
  }

}
