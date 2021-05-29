import { Component, OnInit } from '@angular/core';
import { SpinnerInterface } from '../../../../../../interfaces/spinner.interface';

@Component({
  selector: 'm-ball-scale-multiple',
  templateUrl: './ball-scale-multiple.component.html',
  styleUrls: ['./ball-scale-multiple.component.scss']
})
export class BallScaleMultipleComponent implements OnInit, SpinnerInterface {
  loadingText = 'Loading...';
  showLoadingText = true;

  constructor() { }

  ngOnInit(): void {
  }

}
