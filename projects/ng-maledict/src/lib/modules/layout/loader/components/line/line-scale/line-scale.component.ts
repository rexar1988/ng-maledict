import { Component, OnInit } from '@angular/core';
import { SpinnerInterface } from '../../../../../../interfaces/spinner.interface';

@Component({
  selector: 'm-line-scale-spinner',
  templateUrl: './line-scale.component.html',
  styleUrls: ['./line-scale.component.scss'],
})
export class LineScaleComponent implements OnInit, SpinnerInterface {
  speed = '1s';
  loadingText = 'Loading...';
  showLoadingText = true;

  constructor() { }

  ngOnInit(): void {
  }
}
