import { Component, OnInit } from '@angular/core';
import { SpinnerInterface } from '../../../../../../interfaces/spinner.interface';

@Component({
  selector: 'm-line-scale-pulse-out',
  templateUrl: './line-scale-pulse-out.component.html',
  styleUrls: ['./line-scale-pulse-out.component.scss']
})
export class LineScalePulseOutComponent implements OnInit, SpinnerInterface {
  loadingText = 'Loading...';
  showLoadingText = true;

  constructor() { }

  ngOnInit(): void {
  }
}
