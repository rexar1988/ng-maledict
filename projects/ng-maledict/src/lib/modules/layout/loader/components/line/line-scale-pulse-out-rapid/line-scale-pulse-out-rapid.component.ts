import { Component, OnInit } from '@angular/core';
import { SpinnerInterface } from '../../../../../../interfaces/spinner.interface';

@Component({
  selector: 'm-line-scale-pulse-out-rapid',
  templateUrl: './line-scale-pulse-out-rapid.component.html',
  styleUrls: ['./line-scale-pulse-out-rapid.component.css']
})
export class LineScalePulseOutRapidComponent implements OnInit, SpinnerInterface {
  loadingText = 'Loading...';
  showLoadingText = true;

  constructor() { }

  ngOnInit(): void {
  }
}
